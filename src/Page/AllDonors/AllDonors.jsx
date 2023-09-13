
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/GlobalElement/SectionTitle/SectionTitle";
import Card from "../../Components/GlobalElement/Card/Card";
import { AiOutlinePlus } from 'react-icons/ai';
import './AllDonors.css'


const AllDonors = () => {
    const [donors, setDonors] = useState([])
    const [selectValue , setSelectValue] = useState('All')

    const districts = [
        { "name": "All" },
        { "name": "Bagerhat" },
        { "name": "Bandarban" },
        { "name": "Barguna" },
        { "name": "Barisal" },
        { "name": "Bhola" },
        { "name": "Bogura" },
        { "name": "Brahmanbaria" },
        { "name": "Chandpur" },
        { "name": "Chattogram" },
        { "name": "Chuadanga" },
        { "name": "Comilla" },
        { "name": "Coxs Bazar" },
        { "name": "Dhaka" },
        { "name": "Dinajpur" },
        { "name": "Faridpur" },
        { "name": "Feni" },
        { "name": "Gaibandha" },
        { "name": "Gazipur" },
        { "name": "Gopalganj" },
        { "name": "Habiganj" },
        { "name": "Jamalpur" },
        { "name": "Jashore" },
        { "name": "Jhalokathi" },
        { "name": "Jhenaidah" },
        { "name": "Joypurhat" },
        { "name": "Khagrachari" },
        { "name": "Khulna" },
        { "name": "Kishoreganj" },
        { "name": "Kurigram" },
        { "name": "Kushtia" },
        { "name": "Lakshmipur" },
        { "name": "Lalmonirhat" },
        { "name": "Madaripur" },
        { "name": "Magura" },
        { "name": "Manikganj" },
        { "name": "Meherpur" },
        { "name": "Moulvibazar" },
        { "name": "Munshiganj" },
        { "name": "Mymensingh" },
        { "name": "Naogaon" },
        { "name": "Narail" },
        { "name": "Narayanganj" },
        { "name": "Narsingdi" },
        { "name": "Natore" },
        { "name": "Netrokona" },
        { "name": "Nilphamari" },
        { "name": "Noakhali" },
        { "name": "Pabna" },
        { "name": "Panchagarh" },
        { "name": "Patuakhali" },
        { "name": "Pirojpur" },
        { "name": "Rajbari" },
        { "name": "Rajshahi" },
        { "name": "Rangamati" },
        { "name": "Rangpur" },
        { "name": "Satkhira" },
        { "name": "Shariatpur" },
        { "name": "Sherpur" },
        { "name": "Sirajganj" },
        { "name": "Sunamganj" },
        { "name": "Sylhet" },
        { "name": "Tangail" },
        { "name": "Thakurgaon" }
    ]

    useEffect(() => {
        fetch('/Donors.json')
            .then(res => res.json())
            .then(data => {

                const result = data.filter(df=> df.district == selectValue)
                // const allResult = data.filter(df=> df.district == 'All')

                // console.log(result , 'result')
                console.log(result, data, selectValue);
              
                if(result.length > 0 ){
                    console.log('select')
                    setDonors(result)
                }
                else if( selectValue == 'All'){
                    setDonors(data)
                }
                else{
                    console.log('not found')
                    const notFound = document.getElementById('notFound')
                    if (notFound) {
                        notFound.style.display = 'flex'
                    }
                    //  
                    setDonors([])
                  

                }
                // console.log(data ,selectValue)
            })
    }, [selectValue])



    const handleSelectValue=(value)=>{
    setSelectValue(value)

    }


    const notFound = document.getElementById('notFound')
//    notFound.style.display = 'none'
    return (
        <div className="py-16">


            <SectionTitle heading={"  Our All Donors "} />

            <select onChange={(e)=>handleSelectValue(e.target.value)} className="selector md:p-1  modifiedSelect" name="cars" id="cars">
                {
                    districts.map(district => (<option className="option_data" key={district.name} value={district.name}>
                        {district.name}</option>))
                }
            </select>


            <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-10 px-10 my-10">

                <div className="card w-full text-center flex items-center justify-center bg-base-100 shadow-xl group">
                    <AiOutlinePlus className="w-[60%] h-[60%] text-red" />
                </div>
                {
                    donors &&

                    donors.map(donarDetails => <Card key={donarDetails._id} donarDetails={donarDetails}></Card>)
                }
               {donors.length < 1 && <p id="notFound" className="text-center  font-7xl text-red-600 font-semibold">Not Found</p>}

            </div>

        </div>
    );
};

export default AllDonors;