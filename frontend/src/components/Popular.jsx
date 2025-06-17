import React from 'react';
import ProductCard from "./ProductCard";

const Popular = ({className} ) => {
    return (
        <div className={`container mx-auto flex flex-col items-center ${className}`}>
            <h1 className="font-prata text-black text-[28px] font-normal">Популярные товары</h1>
            <div className="mt-5 mb-10 w-20 h-0.5 bg-pink"></div>
            <div className="flex gap-7">
                <ProductCard labelIds={[1, 2]}/>
                <ProductCard labelIds={[3]}/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};

export default Popular;