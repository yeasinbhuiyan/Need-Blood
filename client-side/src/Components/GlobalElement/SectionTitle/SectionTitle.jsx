/* eslint-disable react/prop-types */
import './SectionTitle.css'

const SectionTitle = ({ heading }) => {
    return (
        <div className="mt-16">
            <h1 className=' md:text-3xl text-2xl text-center text-red pt-16 pb-10 font-semibold'><span className='border-l-red-600 border-l-8 p-5 rounded-full'></span> <span className='title-gradient'> {heading} </span><span className='border-r-red-600 border-r-8 p-5 rounded-full'></span></h1>
        </div>
    );
};

export default SectionTitle;