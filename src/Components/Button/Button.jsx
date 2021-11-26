import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ children, className, onClickButton }) => {
  return (
    <>
      <button
        onClick={onClickButton}
        className={cn(className, s.button)}
        type="button"
      >
        {children}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
};
