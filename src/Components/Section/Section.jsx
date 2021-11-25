import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.scss';

const Section = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node,
};
