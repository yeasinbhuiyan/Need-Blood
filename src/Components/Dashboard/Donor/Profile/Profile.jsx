import './Profile.css'
import profileBg from '../../../../assets/image/profile-bg.jpg'

const Profile = () => {
    return (
        <div className='relative shadow-xl  h-[400px] rounded-xl overflow-hidden'>
            <div className='absolute w-full h-full' >
                <img className='h-[70%] w-full object-cover ' src={profileBg} alt="" />
            </div>
        </div>
    );
};

export default Profile;