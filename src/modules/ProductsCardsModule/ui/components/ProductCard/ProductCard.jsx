import React from 'react';
import cls from './ProductCard.module.scss';

const ProductCard = ({product}) => {
    return (
        <div className={cls.card}>
            <div className={cls.card__type_field}>{product.type}</div>
            <div className={cls.card__date_field}>{product.date}</div>
            <div className={cls.card__title_field}>{product.title}</div>
            <div className={cls.card__address_field}>{product.address}</div>
            <div className={cls.card__count_field}>{product.count} RUB</div>
        </div>
    );
};

export default ProductCard;