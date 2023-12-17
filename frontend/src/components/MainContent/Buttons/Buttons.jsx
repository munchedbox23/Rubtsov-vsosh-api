// Buttons.js
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Buttons.module.css';

const Buttons = ({ to, text }) => {
  return (
    <div className={classes.BtnContainer}>
      <Link to={to} className={classes.MainBtn}>
        {text}
      </Link>
    </div>
  );
};

export default Buttons;
