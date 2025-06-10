import React from 'react';
import CatWoman from '../assets/images/cat_woman.png'
import CatMan from '../assets/images/cat_man.png'
import CatVib from '../assets/images/cat_vib.png'
import CatLub from '../assets/images/cat_lub.png'


const categories = [
    {title: 'Для женщин', image: CatWoman, url: '/category1'},
    {title: 'Для мужчин', image: CatMan, url: '/category2'},
    {title: 'Гигиена и косметика', image: CatLub, url: '/category3'},
    {title: 'Вибраторы', image: CatVib, url: '/category4'},
    {title: 'Лубриканты', image: CatLub, url: '/category5'},
    {title: 'Вибраторы', image: CatVib, url: '/category6'},
    {title: 'Гигиена и косметика', image: CatLub, url: '/category7'},
    {title: 'Вибраторы', image: CatVib, url: '/category8'}
];

const Category = ({className} ) => {
    return (
        <div className={`container flex flex-col justify-center items-center mx-auto font-prata text-sm font-medium text-black ${className}`}>
            <h1 className="text-[28px]">Категории</h1>
            <div className="w-20 h-0.5 mt-5 bg-pink"></div>

            <div className="flex flex-wrap justify-between items-center gap-8 my-10">
                {categories.map((category) => (
                    <a
                        key={category.url}
                        href={category.url}
                        className="w-[300px] h-[200px] bg-[#f8f1fb] px-8 py-8 text-lg font-normal relative"
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                            className="absolute bottom-0 right-0"
                        />
                        {category.title}
                    </a>
                ))}
            </div>

            <a className="text-pink font-montserrat tracking-wider border-b border-pink pb-1 hover:opacity-75" href="#">Смотреть все категории</a>

        </div>
    );
};

export default Category;