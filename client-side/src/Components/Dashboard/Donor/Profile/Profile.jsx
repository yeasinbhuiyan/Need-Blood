import './Profile.css'
import profileBg from '../../../../assets/image/profile-bg.jpg'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const Profile = () => {
    return (
        <>
            {/* <div className='relative shadow-xl  h-[550px] rounded-xl overflow-hidden'>
                <div className='absolute w-full h-full' >
                    <img className='h-[40%] w-full object-cover ' src={profileBg} alt="" />
                </div>
                <div className='flex justify-center flex-col  items-center w-full h-full '>
                    <div className='z-10 '>
                        <img className='border-4 border-red-600 md:w-[200px] w-[140px] h-[140px] md:h-[240px] object-cover rounded-[100%]' src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-[20px]'>Md. Yeasin Arafat Bhuiyan</h2>
                        <p className='font-semibold'>Dhaka ,Bangladesh</p>
                    </div>

                    <div className='mx-auto px-10 grid grid-cols-2 gap-10 mt-10'>
                        <div>
                            <h2 className='font-bold text-[20px]'>Md. Yeasin Arafat Bhuiyan</h2>
                            <p className='font-semibold'>Dhaka ,Bangladesh</p>

                        </div>
                        <div>
                            <h2 className='font-bold text-[20px]'>Md. Yeasin Arafat Bhuiyan</h2>
                            <p className='font-semibold'>Dhaka ,Bangladesh</p>

                        </div>
                    </div>

                </div>
               

            </div> */}


            <div to={'/dashboard/create-profile'} className=''>
                <div className='relative shadow-xl  h-[500px] rounded-xl overflow-hidden'>
                <div className='absolute w-full h-full' >
                    <img className='h-[40%] w-full object-cover ' src={profileBg} alt="" />
                </div>
                <div  className='flex justify-center flex-col  items-center w-full h-full  '>
                    <Link to={'/dashboard/create-profile'} className='z-10 '>
                    <AiOutlinePlus className='border-4 bg-slate-100 border-red-600 md:w-[200px] w-[140px] h-[140px] md:h-[240px] object-cover rounded-[100%]' />
                        {/* <img className='border-4 border-red-600 md:w-[200px] w-[140px] h-[140px] md:h-[240px] object-cover rounded-[100%]' src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" /> */}
                    </Link>
                    <div className='text-center'>
                        <h2 className='font-bold text-3xl'>Create Profile</h2>
                        
                    </div>

                    {/* <div className='mx-auto px-10 grid grid-cols-2 gap-10 mt-10'>
                        <div>
                            <h2 className='font-bold text-[20px]'>Md. Yeasin Arafat Bhuiyan</h2>
                            <p className='font-semibold'>Dhaka ,Bangladesh</p>

                        </div>
                        <div>
                            <h2 className='font-bold text-[20px]'>Md. Yeasin Arafat Bhuiyan</h2>
                            <p className='font-semibold'>Dhaka ,Bangladesh</p>

                        </div>
                    </div> */}

                </div>
               

            </div>
            </div>

        </>
    );
};

export default Profile;