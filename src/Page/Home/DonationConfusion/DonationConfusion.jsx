import { Link } from 'react-router-dom';
import img1 from '../../../assets/image/confustion-1.jpg'
import img2 from '../../../assets/image/confustion-2.jpg'
import img3 from '../../../assets/image/confustion-3.jpg'
import { MdBloodtype } from 'react-icons/md';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import './DonationConfusion.css'
const DonationConfusion = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-16 gap-8">
            <div className="card w-full bg-base-100 shadow-xl group ">
                <figure><img className='hover:scale-110 transition h-60 w-full' src={img1} alt="Donor" /></figure>

                <p className='bg-black p-4 z-10 -mt-5 text-white mx-auto'><MdBloodtype className='text-3xl w-8 h-8'/></p>

                <div className="card-body p-0">
                    <div className='px-10 text-center space-y-4 py-12'>
                        <h2 className="card-title  text-black font-bold justify-center">Become a Donor</h2>
                        <p className='text-sm '>Start with a brief and welcoming introduction that explains the importance of blood donation and how it can save lives. Highlight the impact that a single donation can have on patients in need of blood transfusions.</p>

                    </div>
                    <div className="relative" >
                        <Link to={'/becomeDonor'}> <button className="bottom-0 py-2 px-3 confusion-btn absolute text-gray-200 w-full font-semibold text-center">Read More</button></Link>
                    </div>

                </div>
            </div>


            <div className="card w-full bg-base-100 shadow-xl group">
                <figure><img className='hover:scale-110 transition h-60 w-full' src={img2} alt="Donor" /></figure>
                <p className='bg-red p-4 z-10 -mt-5 text-white mx-auto'><BiSolidDonateBlood className='text-3xl w-8 h-8'/></p>

                <div className="card-body p-0">
                    <div className='px-10 text-center space-y-4 py-12'>
                        <h2 className="card-title  text-black font-bold justify-center">Why Give Blood?</h2>
                        <p className='text-sm '>Start with a brief and welcoming introduction that explains the importance of blood donation and how it can save lives. Highlight the impact that a single donation can have on patients in need of blood transfusions.</p>

                    </div>
                    <div className="relative" >
                        <Link to={'/giveBlood'}> <button className="bottom-0 py-2 px-3 bg-red hover:bg-black absolute text-gray-200 w-full font-semibold text-center">Read More</button></Link>
                    </div>

                </div>
            </div>

            <div className="card w-full  bg-base-100 shadow-xl group">
                <figure><img className='hover:scale-110 transition h-60 w-full' src={img3} alt="Donor" /></figure>
                <p className='bg-black p-4 z-10 -mt-5 text-white mx-auto'><LiaHandsHelpingSolid className='text-3xl w-8 h-8'/></p>

                <div className="card-body p-0">
                    <div className='px-10 text-center space-y-4 py-12'>
                        <h2 className="card-title  text-black font-bold justify-center">How Donations Helps</h2>
                        <p className='text-sm '>Start with a brief and welcoming introduction that explains the importance of blood donation and how it can save lives. Highlight the impact that a single donation can have on patients in need of blood transfusions.</p>

                    </div>
                    <div className="relative" >
                        <Link > <button className="bottom-0 py-2 px-3 confusion-btn absolute text-gray-200 w-full font-semibold text-center">Read More</button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DonationConfusion;