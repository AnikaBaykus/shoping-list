import React from 'react';
import ProductList from 'Components/ProductList';

const ShoppingListViews = ({
  blockTitle,
  data,
  onDeleteProduct,
  onSubmit,
  onBuyProduct,
}) => {
  return (
    <>
      <h1>{blockTitle}</h1>
      <ProductList
        cards={data}
        onDeleteProduct={onDeleteProduct}
        onSubmit={onSubmit}
        onBuyProduct={onBuyProduct}
      />
    </>
  );
};

export default ShoppingListViews;
