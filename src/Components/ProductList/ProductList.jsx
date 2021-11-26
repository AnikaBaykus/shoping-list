import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'Components/ProductCard';
import Button from 'Components/Button';
import Modal from 'Components/Modal';
import { BiPlusCircle } from 'react-icons/bi';
import s from './ProductList.module.scss';

const ProductList = ({ cards }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = event => {
    toggleModal();
  };
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
      <div className={s.btnBlock}>
        <Button className={s.addCard} onClickButton={openModal}>
          <BiPlusCircle />
        </Button>
      </div>
      {showModal && <Modal onCloseModal={toggleModal} showModal={showModal} />}
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
