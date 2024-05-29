import React from 'react';


function ProductCard({title,price,image,rating}){
    // console.log(props)
    return (
        <>
        <div className='card'>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>${price}</p>
        </div>
        </>
    )
}

export default ProductCard;