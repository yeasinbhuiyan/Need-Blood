import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiFillFacebook, AiFillPhone, AiFillTwitterSquare, AiOutlineLink } from 'react-icons/ai';
import { FiInstagram, } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import './DonorDetails.css'

const DonorDetails = () => {
    const [donorDetails, setDonorDetails] = useState({})

    const { description, name,_id, phone, location, given_times, img, hemoglobin, gender, donation_details, facebook, instragram, website, twitter, linkedin } = donorDetails
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
    // console.log(donation_details)


    // for phone number 
    // const handleCall=(event)=> {
    //     event.preventDefault();
    //     const phoneNumber = document.querySelector('.phone-number').textContent;
    //     window.location.href = `tel:${phoneNumber}`;
    //   }

    return (
        <>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:py-20 p-10 py-20 mx-auto'>


                    <div className='mx-auto p-5 md:p-0'>
                        <img className='w-11/12 h-full rounded' src={img} alt="" />

                    </div>

                    <div className='mx-auto p-5 md:p-10 lg:p-0'>

                        <h1 className='text-5xl font-semibold'>{name}</h1>

                        <p className='mt-4 text-gray-600 font-semibold'>{description}</p>

                        <p className='my-5'><span className=' text-xl font-semibold'>Locaiton:</span><span className='text-xl font-bold ms-2'>{location}</span></p>
                        <p className='my-5'><span className=' text-xl font-semibold'>Hemoglobin:</span><span className='text-xl font-bold ms-2'>{hemoglobin} g/dL</span></p>
                        <p className='my-5'><span className=' text-xl font-semibold'>Given Times:</span><span className='text-xl font-bold ms-2'>{given_times}</span></p>
                        <p className='my-5'><span className=' text-xl font-semibold'>Gender:</span><span className='text-xl font-bold ms-2'>{gender}</span></p>
                     
                        {/* <p className='my-5'><span className=' text-xl font-semibold'>Phone: </span><span className='text-xl font-bold ms-2 phone-number'>{parseInt(`${phone}`)}</span></p> */}
                        {/* <p><span className="phone-number">123-456-7890</span></p> */}
                        {/* <p className='flex items-center'><FaThumbsUp className='text-info'></FaThumbsUp><span className='ms-2 font-semibold'>{chef.likes}</span></p> */}


                        <p className='flex gap-6 items-center '>
                            <a href={facebook} target='_blank'><AiFillFacebook className='text-2xl' /></a>
                            <a href={instragram} target='_blank'><FiInstagram className='text-2xl' /></a>
                            <a href={twitter} target='_blank'> <AiFillTwitterSquare className='text-2xl' /></a>
                            <a href={linkedin} target='_blank'> <FaLinkedin className='text-2xl' /></a>
                            <a href={website} target='_blank'>  <AiOutlineLink className='text-2xl' /></a>
                            {/* <a href="#" onClick={handleCall} target='_blank'>  <AiFillPhone className='text-2xl' /></a> */}





                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8 px-9'>

                    {
                        donation_details && donation_details.map(details => (<>


                            <div className='flex pt-32 md:pt-16 odd-reverse flex-col md:flex-row items-center justify-between gap-5 md:gap-10 lg:gap-40 px-9'>
                                <div className='md:w-1/2'>
                                    <img className='w-full md:h-96 h-64' src={details.img} alt="" />
                                </div>
                                <div className='md:w-1/2'>
                                    <h2 className='text-3xl font-semibold'>{details.hospital}</h2>
                                    <p>{details.description}</p>
                                </div>
                            </div>

                        </>))
                    }


                </div>


            </div>

        </>

    );
};

export default DonorDetails;