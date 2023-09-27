import { useState } from 'react';
import './DonatedBlood.css'
import Select from 'react-select'


const DonatedBlood = () => {
    const [district, setDistrict] = useState(null)
    const districts = [
        { value: "Bagerhat", label: "Bagerhat" },
        { value: "Bandarban", label: "Bandarban" },
        { value: "Barguna", label: "Barguna" },
        { value: "Barisal", label: "Barisal" },
        { value: "Bhola", label: "Bhola" },
        { value: "Bogura", label: "Bogura" },
        { value: "Brahmanbaria", label: "Brahmanbaria" },
        { value: "Chandpur", label: "Chandpur" },
        { value: "Chattogram", label: "Chattogram" },
        { value: "Chuadanga", label: "Chuadanga" },
        { value: "Comilla", label: "Comilla" },
        { value: "Coxs Bazar", label: "Coxs Bazar" },
        { value: "Dhaka", label: "Dhaka" },
        { value: "Dinajpur", label: "Dinajpur" },
        { value: "Faridpur", label: "Faridpur" },
        { value: "Feni", label: "Feni" },
        { value: "Gaibandha", label: "Gaibandha" },
        { value: "Gazipur", label: "Gazipur" },
        { value: "Gopalganj", label: "Gopalganj" },
        { value: "Habiganj", label: "Habiganj" },
        { value: "Jamalpur", label: "Jamalpur" },
        { value: "Jashore", label: "Jashore" },
        { value: "Jhalokathi", label: "Jhalokathi" },
        { value: "Jhenaidah", label: "Jhenaidah" },
        { value: "Joypurhat", label: "Joypurhat" },
        { value: "Khagrachari", label: "Khagrachari" },
        { value: "Khulna", label: "Khulna" },
        { value: "Kishoreganj", label: "Kishoreganj" },
        { value: "Kurigram", label: "Kurigram" },
        { value: "Kushtia", label: "Kushtia" },
        { value: "Lakshmipur", label: "Lakshmipur" },
        { value: "Lalmonirhat", label: "Lalmonirhat" },
        { value: "Madaripur", label: "Madaripur" },
        { value: "Magura", label: "Magura" },
        { value: "Manikganj", label: "Manikganj" },
        { value: "Meherpur", label: "Meherpur" },
        { value: "Moulvibazar", label: "Moulvibazar" },
        { value: "Munshiganj", label: "Munshiganj" },
        { value: "Mymensingh", label: "Mymensingh" },
        { value: "Naogaon", label: "Naogaon" },
        { value: "Narail", label: "Narail" },
        { value: "Narayanganj", label: "Narayanganj" },
        { value: "Narsingdi", label: "Narsingdi" },
        { value: "Natore", label: "Natore" },
        { value: "Netrokona", label: "Netrokona" },
        { value: "Nilphamari", label: "Nilphamari" },
        { value: "Noakhali", label: "Noakhali" },
        { value: "Pabna", label: "Pabna" },
        { value: "Panchagarh", label: "Panchagarh" },
        { value: "Patuakhali", label: "Patuakhali" },
        { value: "Pirojpur", label: "Pirojpur" },
        { value: "Rajbari", label: "Rajbari" },
        { value: "Rajshahi", label: "Rajshahi" },
        { value: "Rangamati", label: "Rangamati" },
        { value: "Rangpur", label: "Rangpur" },
        { value: "Satkhira", label: "Satkhira" },
        { value: "Shariatpur", label: "Shariatpur" },
        { value: "Sherpur", label: "Sherpur" },
        { value: "Sirajganj", label: "Sirajganj" },
        { value: "Sunamganj", label: "Sunamganj" },
        { value: "Sylhet", label: "Sylhet" },
        { value: "Tangail", label: "Tangail" },
        { value: "Thakurgaon", label: "Thakurgaon" }
    ]


    const handleDonatedBlood = (e) => {
        e.preventDefault()

        const form = e.target 
        const donation_picture = form.file
        const hospital_name = form.hospital_name.value 
        const donation_district = district.value 
        const location = form.location.value 


        console.log(donation_picture , hospital_name , location , donation_district)

    }


    return (
        <div className='donated_blood'>
            <form onSubmit={handleDonatedBlood}>
                <div className='donated_blood_common'>
                    <label htmlFor="">Donation Picture </label>
                    <input type="file" name='donation_picture' />
                </div>
                <div className='donated_blood_common'>
                    <label htmlFor="">Hospital Name </label>
                    <input type="text" name='hospital_name' />
                </div>
                <div className='donated_blood_common'>
                    <label htmlFor="">District </label>
                    <div className='select_drop'>
                        <Select onChange={setDistrict} options={districts} required />
                    </div>
                </div>
                <div className='donated_blood_common'>
                    <label htmlFor="">Location </label>
                    <input type="text" name='location' />
                </div>

                <div>
                    <button className='btn btn-warning'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default DonatedBlood;