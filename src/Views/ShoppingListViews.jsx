import React from 'react';
import ProductList from 'Components/ProductList';

const ShoppingListViews = ({ blockTitle, data }) => {
  return (
    <>
      <h1>{blockTitle}</h1>
      <ProductList cards={data} />
    </>
  );
};

export default ShoppingListViews;
