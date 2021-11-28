import React from 'react';
import { useState } from 'react';
import ProductCard from 'Components/ProductCard';
import Button from 'Components/Button';
import Modal from 'Components/Modal';
import { BiPlusCircle } from 'react-icons/bi';
import s from './ProductList.module.scss';

const ProductList = ({ cards, onDeleteProduct, onSubmit, onBuyProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = event => {
    toggleModal();
  };

  const availabilityOfCards = cards.length;

  return (
    <>
      <div className={s.btnBlock}>
        <Button className={s.addCard} onClickButton={openModal}>
          <BiPlusCircle />
        </Button>
      </div>
      {availabilityOfCards === 0 ? (
        <h2>Вы ещё не добавили ни одного товара</h2>
      ) : (
        <ul className={s.list}>
          {cards.map(
            ({ id, name, price, description, alt, image = '', isBuy }) => (
              <li key={id}>
                <ProductCard
                  name={name}
                  price={price}
                  img={image}
                  alt={alt}
                  text={description}
                  status={isBuy}
                  onDeleteProduct={onDeleteProduct}
                  onBuyProduct={onBuyProduct}
                  id={id}
                />
              </li>
            ),
          )}
        </ul>
      )}
      {availabilityOfCards >= 2 && (
        <div className={s.btnBlock}>
          <Button className={s.addCard} onClickButton={openModal}>
            <BiPlusCircle />
          </Button>
        </div>
      )}
      {showModal && (
        <Modal
          onSubmit={onSubmit}
          onCloseModal={toggleModal}
          showModal={showModal}
        />
      )}
    </>
  );
};

export default ProductList;
