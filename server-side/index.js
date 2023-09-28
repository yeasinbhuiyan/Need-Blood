const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt')
const multer = require('multer')
const port = process.env.PORT || 5050

const app = express()


// middlewear  
app.use(express.json())
app.use(cors())

const db = {
    host: 'localhost',
    user: "yeasin",
    password: "123456",
    database: "need-blood",
    connectionLimit: 10
}

app.use('/public', express.static('public'));

//start profile picture image  

// multer middle wear 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./public/Images/Profile")
    },
    filename: function (req, file, cb) {

        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})


const upload = multer({
    storage, limits: {
        fileSize: 1024 * 1024 * 5, // 5MB (adjust as needed)
    },
})






const pool = mysql.createPool(db)

app.get('/', (req, res) => {
    res.send('server is running')
})


app.post('/profile-upload', upload.single('file'), (req, res) => {
    res.send(req.file)
})


app.post('/create-user', async (req, res) => {
    const connection = await pool.getConnection()
    const { name, password, email, profile, status } = req?.body;

    // console.log(name,password,email,profile,status)
    // check email  
    const [rows] = await connection.query(`SELECT * FROM users WHERE email ='${email}'`)


    if (!rows[0]?.email) {

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const query = 'INSERT IGNORE INTO users (name, password_hash , email ,profile , status) VALUES (?, ?, ?,?, ?)';

        const userDetails = [
            name,
            hashedPassword,
            email,
            profile,
            status
        ]


        const userDetailsSet = {
            name,
            email,
            code: hashedPassword,
            profile,
            status
        }



        const response = await connection.query(query, userDetails, (error, results) => {
            if (error) {
                res.status(500).send({ error: 'Internal server error' });
            } else {
                res.status(200).send({ message: 'User registered successfully' });
            }
        });

        res.send(userDetailsSet)

    } else {

        res.send({ error: true, message: 'This Email Already added' })
    }



    connection.release()
})


app.get('/get-email/:email', async (req, res) => {
    const connection = await pool.getConnection()
    const email = req?.params.email

    console.log(email)
    const [rows] = await connection.query(`SELECT email from users WHERE email='${email}'`)
    console.log(rows) 
    if(rows[0]){
         res.send(rows)
    }else{
        res.send({error: true})
    }

    connection.release()
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})