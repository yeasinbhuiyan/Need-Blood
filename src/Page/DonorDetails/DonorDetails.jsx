import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DonorDetails = () => {
    const [donorDetails, setDonorDetails] = useState({})

    const { description, name, _id, location, given_times, img, hemoglobin , gender } = donorDetails

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        fetch('/Donors.json')
            .then(res => res.json())
            .then(data => {
                const donorDetails = data.find(df => df._id == id)
                setDonorDetails(donorDetails)

            })
    }, [])


    return (
   <>
     


<div>
<div className='grid grid-cols-1 lg:grid-cols-2 md:py-20 p-10 mx-auto'>


<div className='mx-auto p-5 md:p-0'>
<img className='w-96 h-full rounded' src={img} alt="" />

</div>

<div className='mx-auto p-5 md:p-10 lg:p-0'>

<h1 className='text-5xl font-semibold'>{name}</h1>

<p className='mt-4 text-gray-600 font-semibold'>{description}</p>

<p className='my-5'><span className=' text-xl font-semibold'>Locaiton:</span><span className='text-xl font-bold ms-2'>{location}</span></p>
<p className='my-5'><span className=' text-xl font-semibold'>Hemoglobin:</span><span className='text-xl font-bold ms-2'>{hemoglobin} g/dL</span></p>
<p className='my-5'><span className=' text-xl font-semibold'>Given Times:</span><span className='text-xl font-bold ms-2'>{given_times}</span></p>
<p className='my-5'><span className=' text-xl font-semibold'>Gender:</span><span className='text-xl font-bold ms-2'>{gender}</span></p>

{/* <p className='flex items-center'><FaThumbsUp className='text-info'></FaThumbsUp><span className='ms-2 font-semibold'>{chef.likes}</span></p> */}
</div>
</div>






</div>
   
   </>

    );
};

export default DonorDetails;