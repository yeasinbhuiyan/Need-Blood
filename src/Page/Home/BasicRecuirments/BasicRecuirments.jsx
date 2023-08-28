import { HiOutlineCake } from 'react-icons/hi';
import { LiaWeightSolid } from 'react-icons/lia';
import { GiLoveMystery } from 'react-icons/gi';
import { BiIdCard, BiSolidBowlRice } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { LuGlassWater } from 'react-icons/lu';
import './BasicRecuirments.css'

const BasicRecuirments = () => {
    return (
        <div className='py-36 mt-20 basic-recuirment'>
            <h1 className='md:text-4xl text-center text-2xl  w-full font-bold'>Basic Recuirements & Recommendations</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-44 md:gap-40 gap-32 text-center px-20 py-20'>
                <div className='flex items-center flex-col'>
                    <HiOutlineCake className='text-7xl' />
                    <p className='font-semibold'> Must Be At Least 16 Years Old</p>
                </div>
                <div className='flex items-center flex-col'>
                    <HiOutlineCake className='text-7xl' />
                    <p className='font-semibold'> Must Be At Least 16 Years Old</p>
                </div>
                <div className='flex items-center flex-col'>
                    <LiaWeightSolid className='text-7xl' />
                    <p className='font-semibold'> Weight at least 110 pounds
                    </p>
                </div>
                <div className='flex items-center flex-col'>
                    <GiLoveMystery className='text-7xl' />
                    <p className='font-semibold'> Be in good general health</p>
                </div>
                <div className='flex items-center flex-col'>
                    <BiIdCard className='text-7xl' />
                    <p className='font-semibold'> Bring your ID</p>
                </div>
                <div className='flex items-center flex-col'>
                    <BiSolidBowlRice className='text-7xl' />
                    <p className='font-semibold'>Eat within 2 hours ahead of your donation</p>
                </div>
                <div className='flex items-center flex-col'>
                    <LuGlassWater className='text-7xl' />
                    <p className='font-semibold'> Drink plenty of non-alcoholic liquids</p>
                </div>
                <div className='flex items-center flex-col'>
                    <BsCalendarDate className='text-7xl' />
                    <p className='font-semibold'> Wait eight weeks between whole blood donation</p>
                </div>
            </div>

        </div>
    );
};

export default BasicRecuirments;