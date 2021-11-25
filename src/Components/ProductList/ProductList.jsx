import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'Components/ProductCard';
import s from './ProductList.module.scss';

const ProductList = ({ cards }) => {
  return (
    <>
      <ul className={s.list}>
        {cards.map(({ id, name, price, description, alt, image }) => (
          <li key={id}>
            <ProductCard
              name={name}
              price={price}
              img={image}
              alt={alt}
              text={description}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};
