import React from 'react';
import classes from './FormBtn.module.css';
import { Link } from 'react-router-dom';

const FormBtn = ({ onLogin, onRegister, isLoggedIn }) => {
  return (
    <div className={classes.FormBtns}>
      {isLoggedIn ? (
        <Link to="/taskBank" className={classes.FormBtn}>
          Задачи
        </Link>
      ) : (
        <button className={classes.FormBtn} onClick={onLogin}>
          вход
        </button>
      )}
      <button className={classes.FormBtn} onClick={onRegister}>
        регистрация
      </button>
    </div>
  );
};


export default FormBtn;
