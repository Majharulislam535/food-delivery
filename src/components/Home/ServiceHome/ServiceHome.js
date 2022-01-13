import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';

const ServiceHome = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./fackdata.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const serviceHome = service.slice(1, 7);
    return (
        <div>
            <div>
                <h1 className='text-center md:text-4xl text-4xl py-10 lg:text-6xl font-bold text-primary'>Our Product</h1>
                <div className='grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-8 p-8'>
                    {
                        serviceHome.map(pd => <Product key={pd.id} product={pd}>
                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;