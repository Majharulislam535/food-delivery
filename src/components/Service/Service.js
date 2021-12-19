import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./fackdata.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1 className='text-center md:text-4xl text-4xl py-10 lg:text-6xl font-bold text-primary'>Our Product</h1>
            <div className='grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-8 p-8'>
                {
                    service.map(pd => <Product key={pd.id} product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Service;