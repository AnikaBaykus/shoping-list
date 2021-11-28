import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from 'Components/Button';
import { BiX } from 'react-icons/bi';
import s from './Modal.module.scss';
import Form from '../../Components/Form/Form';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, onSubmit }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.removeEventListener('keydown', handleKeyDown);
    return () => {
      window.addEventListener('keydown', handleKeyDown);
    };
  });

  const handleOverlay = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
    return;
  };

  return createPortal(
    <div className={s.overlay} onClick={handleOverlay}>
      <div className={s.modal}>
        <Button className={s.closeModal} onClickButton={onCloseModal}>
          <BiX />
        </Button>
        <Form onSubmit={onSubmit} />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
