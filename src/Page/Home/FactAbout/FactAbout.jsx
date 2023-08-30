import React, { useState } from 'react';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import FactModal from './FactModal/FactModal';

const FactAbout = () => {
    const [factAbout, setFactAbout] = useState(false)
    const onFactModal = () => {
        setFactAbout(true)
    }
    return (



        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between px-10 my-40'>


            {
                factAbout && <FactModal factAbout={factAbout} setFactAbout={setFactAbout} />
            }

            <div className='space-y-10'>
                <h2 className='text-4xl font-semibold text-red'>Facts About Blood Needs <br /> in Bangladesh</h2>

                <p className='font-semibold text-gray-600 flex gap-5'> <BsFillHeartPulseFill className='text-7xl text-red ' />
                    <p className='flex flex-col gap-2 w-2/3'>

                        <p> Every 2 seconds, an individual in Bangladesh requires blood or platelets.</p>
                        <br />
                        <p>Approximately 8,000 units of red blood cells are needed daily across Bangladesh.</p>
                        <br />
                        <p>The demand for around 1,500 units of platelets and 2,000 units of plasma persists each day in the country.</p>
                    </p>
                </p>
            </div>


            <div className='space-y-10'>
                <h2 className='text-4xl font-semibold text-red'>What Happens To Donated Blood ?</h2>

                <p className='font-semibold text-gray-600 flex gap-5'> <BsFillHeartPulseFill className='text-7xl text-red' />
                    <p className='flex flex-col gap-2 w-2/3'>

                        <p>Have you ever paused to ponder the fate of the precious blood you generously donate in support of those in need? Prepare to be enlightened
                        </p>
                        <p>as NeedBlood.com takes you on an immersive journey into the remarkable destiny that unfolds for your donated blood.
                        </p>


                    </p>
                </p>
                <div className='w-full'>
                    <button onClick={onFactModal} className='primary-btn text-center '>Read more</button>
                </div>
            </div>

        </div>
    );
};

export default FactAbout;