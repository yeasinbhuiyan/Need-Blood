const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const port = process.env.PORT || 5050

const app = express()


// middlewear  
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('server is running')
})




app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})