import React from 'react';
import Product from "../assets/images/product.png"
import {getStars} from "../utils/ratingToStars";
import {labels} from "../constants/Labels"

const ProductCard = ( { labelIds = [] } ) => {

    const filteredLabels = labels.filter(label => labelIds.includes(label.id));
    const stars = getStars(3, 22)

    return (
        <div className="w-[300px] h-[440px] font-montserrat relative">
            <div className="absolute top-2 left-2 flex flex-wrap gap-1.5 max-w-full z-10">
                {filteredLabels.map(label => (
                    <div
                        key={label.id}
                        className={`text-white text-xs px-2 py-0.5 rounded-md ${label.bgColor}`}
                    >
                        {label.text}
                    </div>
                ))}
            </div>

            <img className="w-[300px] h-[300px]" src={Product} alt="product" />

            <div>
                <div className="flex justify-between mt-5">
                    <span className="text-xl block font-normal">13 900 ₽</span>
                    <div className="flex w-[125px] text-xs font-medium h-[24px] border-pink border-2 bg-[#fef5f7] rounded-md text-pink py-0.5 px-1 justify-between items-center">
                        Бонусы +100 ₽
                        <button className="w-3 h-3 rounded-full bg-pink flex items-center justify-center text-white text-[9px]">
                            ?
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <a href="#">We-Vibe Nova 2, Вибромассажёр</a>
                    <div className="flex gap-2.5 items-center">
                        <div className="flex">
                            {stars}
                        </div>
                        <span>30 отзывов</span>
                    </div>
                    <span className="block">Производитель: We-vibe, Канада</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;