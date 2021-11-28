import React from 'react';
import s from './ProductCard.module.scss';
import Button from 'Components/Button';
// import s from 'Components/Button.module.scss';
import { FiCheck, FiTrash2 } from 'react-icons/fi';

const ProductCard = ({
  name,
  price,
  img,
  alt,
  text,
  status,
  onDeleteProduct,
  onBuyProduct,
  id,
}) => {
  console.log('status = ', status);
  return (
    <div className={s.cardWrapper} key={id}>
      <div className={status ? s.cardBuy : s.card}>
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
          <Button onClickButton={() => onBuyProduct(id)}>
            <FiCheck />
          </Button>
          <Button onClickButton={() => onDeleteProduct(id)}>
            <FiTrash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
