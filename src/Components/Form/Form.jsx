import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.scss';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = useState('');
  const onSubmit = data => {
    console.log(data);
    console.log(data.image);
  };

  return (
    <>
      <p className={s.title}>Добавить товар</p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={s.input}
          {...register('name', { required: true, maxLength: 20 })}
          type="text"
          placeholder="Название товара"
        />
        <input
          className={s.input}
          {...register('price', { min: 0 })}
          type="number"
          placeholder="Стоимость"
        />
        <input
          className={s.btn}
          {...register('image')}
          type="file"
          name="picture"
        />
        <textarea
          className={s.textarea}
          {...register('description')}
          type="text"
          placeholder="Описание"
          maxLength="150"
        ></textarea>
        <input className={s.btn} type="submit" value="Добавить" />
      </form>
    </>
  );
};

export default Form;
