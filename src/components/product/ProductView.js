import React from 'react';
import './product.css';

const ProductView = ({ img, link }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle" />
                <div className="p-circle" />
                <div className="p-circle" />
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="card">
                    <img
                        src={img}
                        alt="project"
                        className="p-img card-img"
                        loading="lazy"
                        decoding="async"
                        srcSet={`${img} 1x, ${img} 2x`}
                        sizes="(max-width:480px) 80vw, (max-width: 720px) 45vw, 30vw"
                    />
                </div>
            </a>
        </div>
    );
};

export default ProductView;
