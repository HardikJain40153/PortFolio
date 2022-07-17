import React from 'react';
import Product from '../product/Product';
import { products } from '../../data';
import './productList.css';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire ⥐ Projects</h1>
                <p className="pl-desc">
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>"For the things we have to learn before we can do them, we learn by doing them."</span>
                    <br />
                    <span> My personal projects are displayed with their GitHub Repository hyperlink.</span>
                </p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;