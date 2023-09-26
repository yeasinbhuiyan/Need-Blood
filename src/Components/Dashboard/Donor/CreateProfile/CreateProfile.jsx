import { useState } from 'react';
import './CreateProfile.css'
import Select from 'react-select'

const CreateProfile = () => {
    const [bloodGroup, setBloodGroup] = useState(null)
    const [district, setDistrict] = useState(null)

    const options = [
        { value: 'A+', label: 'A+' },
        { value: 'B+', label: 'B+' },
        { value: 'AB+', label: 'AB+' },
        { value: 'O+', label: 'O+' },
        { value: 'A-', label: 'A-' },
        { value: 'B-', label: 'B-' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O-', label: 'O-' }
    ]

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


    const handleCreateProfile = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const location = form.location.value
        const hemoglobin = form.hemoglobin.value
        const gender = form.gender.value
        const blood_group = bloodGroup.value
        const donor_district = district.value
        
        const phone = form.phone.value


        console.log(name, location, hemoglobin, gender, blood_group, phone , donor_district)


    }
    return (
        <div className="create_profile">
            <form onSubmit={handleCreateProfile}>
                <div className="create_profile_common">
                    <label>Profile Picture : </label>
                    <input type="file" name="profile" required />
                </div>

                <div className="create_profile_common">
                    <label>Name * : </label>
                    <input type="text" name="name" placeholder="Name" required />
                </div>

                <div className="create_profile_common">
                    <label>Location* : </label>
                    <input type="text" name="location" placeholder='Location' required />
                </div>
                <div className="create_profile_common">
                    <label>District* : </label>

                    <div className='select_drop'>
                        <Select onChange={setDistrict} options={districts} required />
                    </div>
                    {/* <input type="text" name="location" placeholder='Location' required /> */}
                </div>
                <div className="create_profile_common">
                    <label>Hemoglobin*  : </label>
                    <input type="text" name="hemoglobin" placeholder='Hemoglobin' required />
                </div>
                <div className="create_profile_common">
                    <label>Gender*  : </label>
                    <input type="text" name="gender" placeholder='Gender' required />
                </div>
                <div className="create_profile_common">
                    <label>Blood Group* : </label>
                    {/* <input type="text" name="blood_group" placeholder='Blood Group' required/> */}
                    <div className='select_drop'>
                        <Select onChange={setBloodGroup} options={options} required />
                    </div>
                </div>
                <div className="create_profile_common">
                    <label>Facebook Link : </label>
                    <input type="url" name="facebook" placeholder='Facebook Link' />
                </div>
                <div className="create_profile_common">
                    <label>Instragram Link : </label>
                    <input type="url" name="instragram" placeholder='Instragram Link' />
                </div>
                <div className="create_profile_common">
                    <label>Linkedin Link : </label>
                    <input type="url" name="linkedin" placeholder='Linkedin Link' />
                </div>
                <div className="create_profile_common">
                    <label>Twitter Link : </label>
                    <input type="url" name="twitter" placeholder='Twitter Link' />
                </div>
                <div className="create_profile_common">
                    <label>Portfolio Link : </label>
                    <input type="url" name="portfolio" placeholder='Portfolio Link' />
                </div>

                <div>
                    <button type='submit' className='btn btn-warning'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProfile;