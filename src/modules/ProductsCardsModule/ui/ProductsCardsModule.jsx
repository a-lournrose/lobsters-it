import React from 'react';
import ProductCard from "./components/ProductCard/ProductCard";
import cls from './ProductsCardsModule.module.scss';

const ProductsCardsModule = () => {
    const products = [
        {
            type: 'Отель',
            date: '2905 - 31.05',
            title: 'Отель "Пенза"',
            address: 'улица Пушкина, д.99',
            count: '5000'
        },
        {
            type: 'Отель',
            date: '2905 - 31.05',
            title: 'Музей одной картины',
            address: 'улица Пушкина, д.99',
            count: '300'
        },
        {
            type: 'Отель',
            date: '2905 - 31.05',
            title: 'Спектакль "Гроза"',
            address: 'улица Пушкина, д.99',
            count: '1250'
        },
    ]
    return (
        <div className={cls.cards}>
            {products.map(product => (
                <ProductCard product={product}/>
            ))}
        </div>
    );
};

export default ProductsCardsModule;