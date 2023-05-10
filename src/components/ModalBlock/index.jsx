import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './index.module.css';
import { Button } from 'react-bootstrap';
import { closeModal } from '../../reducers/modalReducer';

const ModalBlock = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
        <div className={styles.content}>
          <Button
            variant="light"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalBlock;
