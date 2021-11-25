import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ children }) => {
  return (
    <>
      <button className={s.button} type="button">
        {children}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
};
