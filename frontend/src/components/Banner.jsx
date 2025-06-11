import React from 'react';
import Woman from "../assets/images/woman.png";

//TODO: заполнить какие-то пустые баннеры
const something = [

]
const Banner = ({className} ) => {
    return (
        <div
            className={`container mx-auto h-[380px] ${className}`}
            style={{
                backgroundImage: `url(${Woman})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
        </div>
    );
};

export default Banner;