import React from 'react';
import {ReactComponent as SilenceIcon} from "../assets/icons/silence.svg";
import {ReactComponent as PhoneIcon} from "../assets/icons/phone-about.svg";
import aboutImage from '../assets/images/about.png';


const About = ({className} ) => {
    return (
        <div className={`flex flex-col mx-auto container items-center ${className}`}>
            <h1 className="font-prata text-black text-[28px] font-normal">Почему мы?</h1>
            <div className="mt-5 mb-10 w-20 h-0.5 bg-pink"></div>
            <div className="grid grid-cols-3 h-[429px] w-[1289px] bg-light-gray text-lg font-normal font-prata text-black leading-loose pl-10">
                <div className="flex flex-col justify-end pb-10">
                    <SilenceIcon></SilenceIcon>
                    <h2 className="pt-5">Полная анонимность</h2>
                </div>
                <div className="flex flex-col justify-end pb-10 ">
                    <PhoneIcon></PhoneIcon>
                    <h2 className="w-[224px] pt-5">Личный кабинет и партнерская программа</h2>
                </div>
                <div className="pl-10 bg-cover bg-no-repeat bg-center h-full flex flex-col justify-between" style={{ backgroundImage: `url(${aboutImage})` }}>
                    <div></div>
                    <div>
                        <h2 className="pb-5">Гарантия качества и<br/>
                            возврата средств</h2>
                        <p className="pb-10 text-sm font-montserrat leading-normal">
                            Ваш заказ будет упакован в непрозрачный <br/>
                            серебряный пакет без бренда на нем. Курьер<br/>
                            не знает, что именно и откуда вы заказали.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;