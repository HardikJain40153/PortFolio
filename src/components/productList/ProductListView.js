import React from 'react';
import Product from '../product/Product';
import './productList.css';

const ProductListView = ({ title, description, products }) => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">{title}</h1>
                <p className="pl-desc">
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{description.lead}</span>
                    <br />
                    <span> {description.body}</span>
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductListView;
