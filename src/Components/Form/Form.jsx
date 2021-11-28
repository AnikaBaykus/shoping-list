import React from 'react';
import { useState } from 'react';
// import { useState } from 'react-hook-form';
import s from './Form.module.scss';
import { storage, storageRef } from '../../firebase';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const resetForm = () => {
    setName('');
    setPrice('');
    setImage(null);
    setDescription('');
  };

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangePrice = event => {
    setPrice(event.currentTarget.value);
  };

  const handleChangeImage = event => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
    // setImage(event.currentTarget.value);
  };
  const hendleUpload = () => {
    const uploadImg = storage.ref(`images/${image.name}`).put(image);
    uploadImg.on(
      'shopping-list',
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      },
    );
  };

  const handleChangeDescription = event => {
    setDescription(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, price, image, description, url);
    resetForm();
  };

  return (
    <>
      <p className={s.title}>Добавить товар</p>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChangeName}
          placeholder="Название товара"
        />
        <input
          className={s.input}
          type="number"
          name="price"
          value={price}
          onChange={handleChangePrice}
          placeholder="Стоимость"
        />
        <input
          className={s.btn}
          type="file"
          name="image"
          // value={image}
          onChange={handleChangeImage}
        />
        <textarea
          className={s.textarea}
          type="text"
          name="description"
          value={description}
          onChange={handleChangeDescription}
          placeholder="Описание"
          maxLength="150"
        ></textarea>
        <input className={s.btn} type="submit" onClick={hendleUpload} />
      </form>
    </>
  );
};

export default Form;
