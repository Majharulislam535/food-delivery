import React from 'react';

const Product = (props) => {
    const { img, name, description, price } = props.product;
    return (
        <div>
            <div style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className='card text-center h-full rounded-lg '>
                <div className=''>
                    <img className='mx-auto' width='70%' src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold py-2 text-primary'>{name}</h2>
                    <p className='lg:text-xl text-md text-dark p-2'>{description}</p>
                    <div className='flex justify-between p-4 mt-auto'>
                        <p className='text-2xl font-bold  text-primary'>Price:<span className='text-red'>${price}</span></p>
                        <button className='font-bold bg-dark py-2 px-3 rounded-full text-white'>Add to cart <i className="fas fa-cart-arrow-down"></i></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;