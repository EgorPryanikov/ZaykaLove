import React from 'react';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as VkIcon } from '../assets/icons/vk.svg';
import { ReactComponent as InstIcon } from '../assets/icons/inst.svg';
import { ReactComponent as PointsIcon} from '../assets/icons/points.svg'
import {ReactComponent as SearchIcon} from "../assets/icons/search.svg";
import {ReactComponent as ProfileIcon} from "../assets/icons/profile.svg";
import LogoImg from '../assets/images/logo.png';

const socials = [
    { icon: InstIcon, url: 'https://instagram.com', name: 'Instagram' },
    { icon: VkIcon, url: 'https://vk.com', name: 'Vkontakte' }
];

const categories = [
    { title: 'Для женщин', url: '/category1' },
    { title: 'Для мужчин', url: '/category2' },
    { title: 'Для пар', url: '/category3' },
    { title: 'Гигиена и косметика', url: '/category4' },
    { title: 'Подарочные сертификаты', url: '/category5' },
    { title: 'Идеи для подарков', url: '/category6' },
];

const Header = () => {
    return (
        <header className="font-montserrat text-sm font-medium text-white">
            <div className="border-b border-[#F5F5F5]">
                <div className="container mx-auto py-3 bg-white text-[#999999] flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-14">
                            Ваш город: <span className="text-black font-medium">Москва</span>
                        </span>
                        <nav className="space-x-7">
                            {[
                                { title: 'Про анонимность', url: '/about' },
                                { title: 'Доставка и оплата', url: '/delivery' },
                                { title: 'Условия возврата', url: '/returns' },
                                { title: 'FAQ', url: '/faq' }
                            ].map((item) => (
                                <a
                                    key={item.url}
                                    href={item.url}
                                    className="
                                        text-[#999999]
                                        hover:text-blue-700
                                        transition-colors
                                        duration-200
                                        active:text-blue-900
                                    "
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center">
                            <MailIcon className="mx-2.5" />
                            <span className="text-[#333333] mr-10 hover:text-blue-700">Задать вопрос</span>
                        </button>
                        <div className="flex space-x-5">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        rounded-full
                                        flex items-center justify-center
                                        transition-colors
                                    "
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex items-center bg-white py-4">
                <img className="mr-9" src={LogoImg} alt="logo" />
                <button className="bg-pink w-33 h-12 rounded-md flex font-medium py-3.5 px-5 mr-8">
                    <PointsIcon className="w-5 h-5 mr-2.5" />
                    Каталог
                </button>
                <div className="flex items-center mr-[60px]">
                    <input
                        type="text"
                        className="flex-1 p-2 w-[780px] h-[46px] bg-[#F5F5F5] rounded-sm border border-[#f4f4f4] pl-5"
                        placeholder="Поиск..."
                    />
                    <button className="bg-[#f492ab] rounded-sm h-[46px] w-[56px] flex items-center justify-center">
                        <SearchIcon className="w-5 h-5" />
                    </button>
                </div>
                <button className="ml-auto">
                    <ProfileIcon />
                </button>
            </div>

            <div className="bg-pink w-full h-[58px]">
                <div className="container mx-auto flex justify-between items-center h-14">
                    <nav>
                        {categories.map((category) => (
                            <a
                                key={category.url}
                                href={category.url}
                                className="mx-2 hover:text-[#e6e6e6] border-l border-[#e6e6e6] first:border-l-0 first:pl-0 first:mx-0 pl-4"
                            >
                                {category.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;