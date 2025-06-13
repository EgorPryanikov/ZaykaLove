import React from 'react';
import {ReactComponent as ClockIcon} from "../assets/icons/clock.svg";
import {ReactComponent as CompanyIcon} from "../assets/icons/company-logo.svg";
import {getStars} from "../utils/ratingToStars";
import Product from "../assets/images/product.png"

const Deal = ({className} ) => {

    const stars = getStars(1.5)

    return (
        <div className={`container mx-auto ${className} flex flex-col items-center`}>
            <div className="flex">
                <div className="flex flex-col">
                    <h1 className="text-[#424242] text-[28px] font-normal font-prata">
                        Моментальная акция - успей купить
                    </h1>
                    <span className="ml-auto text-pink text-sm font-medium font-montserrat tracking-wide mb-10">
                        Скидка действует 1 день 12 часов 35 секунд
                    </span>
                </div>
                <div className="ml-4 w-16 h-16 bg-light-gray rounded-full flex items-center justify-center">
                    <ClockIcon></ClockIcon>
                </div>
            </div>

            <div className="flex gap-10">
                <div className="relative inline-block">
                    <img src={Product} alt="product"/>
                    <div className="absolute -top-8 -left-8 bg-pink rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl">
                        %
                    </div>
                </div>
                <div className="text-gray text-sm font-normal font-montserrat leading-normal pt-5 pb-16">
                    <h2 className="text-black text-2xl mb-3">
                        We-Vibe Nova 2, Вибромассажёр
                    </h2>
                    <div className="flex gap-1">
                        {stars}
                        <span className="ml-2 flex items-center mb-5">
                            30 отзывов
                        </span>
                    </div>
                    <div className="flex gap-5 mb-5">
                        <div className="w-20 h-9 bg-light-gray">
                            <CompanyIcon></CompanyIcon>
                        </div>
                        <div className="flex items-center">
                            <span>
                                Производитель: {' '}
                            </span>
                            <span className="underline text-black">
                                We-vibe
                            </span>
                            <span className="text-black">
                                , Канада
                            </span>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="mb-2.5">
                            Преимущества
                        </h3>
                        <div>
                            <div className="flex items-start gap-2.5">
                                <div className="mt-2  bg-pink w-3 h-0.5"></div>
                                <span>
                                    Разнообразить прелюдию
                                </span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <div className="mt-2  bg-pink w-3 h-0.5"></div>
                                <span>
                                    Не содержит глицерина и парабенов
                                </span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <div className="mt-2 bg-pink w-3 h-0.5"></div>
                                <span className="w-[510px]">
                                    Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                        <span className="text-black text-3xl">
                            13 900 ₽
                        </span>
                        <span className="text-xl line-through">
                            16 900 ₽
                        </span>
                    </div>
                    <div className="flex gap-2.5">
                        <button className="text-white w-[112px] h-12 bg-pink rounded-sm">
                            Купить
                        </button>
                        <button className="h-12 w-12 rounded-sm border-pink flex items-center justify-center border-2">
                            <svg className="w-5 h-5 text-red-500 fill-pink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <a href="#" className="mt-10 text-pink leading-relaxed tracking-wider text-sm font-medium border-b">Перейти ко всем акциям</a>
        </div>
    );
};

export default Deal;