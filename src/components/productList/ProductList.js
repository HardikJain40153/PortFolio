import React from 'react';
import ProductListView from './ProductListView';
import { products } from '../../data';

const ProductList = () => {
  const title = 'Create & inspire ⥐ Projects';
  const description = {
    lead: '"For the things we have to learn before we can do them, we learn by doing them."',
    body: 'My personal projects are displayed with their GitHub Repository hyperlink.',
  };

  return <ProductListView title={title} description={description} products={products} />;
};

export default ProductList;