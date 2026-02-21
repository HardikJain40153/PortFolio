import React from 'react';
import ProductView from './ProductView';

const Product = (props) => {
  // Container left for future logic; currently passes props through
  return <ProductView {...props} />;
};

export default Product;