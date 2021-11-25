import React from 'react';
import PropTypes from 'prop-types';
import s from './ProductCard.module.scss';
import Button from 'Components/Button';
// import s from 'Components/Button.module.scss';
import { FiCheck, FiTrash2 } from 'react-icons/fi';

const ProductCard = ({ name, price, img, alt, text }) => {
  return (
    <div className={s.cardWrapper}>
      <div className={s.card}>
        <div className={s.product}>
          <h3 className={s.name}>{name}</h3>
          <div className={s.imageContainer}>
            <img className={s.image} src={img} alt={alt} />
          </div>
        </div>
        <div className={s.productInfo}>
          <div className={s.info}>
            <div>
              <span>Цена:</span>
            </div>
            <div>
              <span className={s.price}>
                {price}
                <span className={s.currency}>₽</span>
              </span>
            </div>
          </div>
          <p className={s.description}>{text}</p>
        </div>
        <div className={s.actions}>
          <Button className>
            <FiCheck />
          </Button>
          <Button>
            <FiTrash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
