import React from 'react';
import delivery from '../../../img/form-bg.png';

const Delivery = () => {
    return (
        <div>
            <div className='lg:mt-20 md:mt-15 mt-10 p-4 lg:flex items-center'>
                <div className='lg:w-1/2 md:w-full w-full'>
                    <h1 className='text-primary font-bold lg:text-6xl md:text-6xl text-4xl py-2'>Free delivery <span className='text-dark'>every day at
                        your convenience</span></h1>
                    <p className='py-4'>
                        Proin rhoncus ligula eu tincidunt cursus. Vestibulum orci nulla, blandit vel convallis sit amet, dictum non nisl. Donec sit amet placerat arcu. Cras rhoncus nisl ac dui vehicula, vel dictum diam vestibulum.
                    </p>
                    <div>
                        <div>
                            <input className=' p-2 m-2 border-2 border-dark rounded ' type="text" placeholder='Your name' />
                            <input style={{ "width": "42%" }} className=' p-2 m-2 border-2 border-dark rounded ' type="email" placeholder='Your email' />
                        </div>
                        <input className='w-9/12 p-2 m-2 border-2 border-dark rounded ' type="text" placeholder='Your Phone number' /> <br />
                        <button className='text-white font-bold text-xl bg-red px-4 py-2 rounded-full'>Submit</button>
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-full w-full'>
                    <img className='rounded-lg mx-auto' width='80%' src={delivery} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;