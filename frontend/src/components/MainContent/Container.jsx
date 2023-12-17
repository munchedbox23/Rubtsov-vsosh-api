import React from 'react';
import classes from './Container.module.css';
import Buttons from './Buttons/Buttons';
import MainImage from './MainImage';
import Authorization from './Authorization/Authorization';

const Container = () => {
  return (
    <div className={classes.Container}>
      <main className={classes.Content}>
        <Buttons to={'/archive'} text={'Архив заданий регионального этапа ВсОШ по физике'}></Buttons>
        <Buttons to={'/news'} text={'Новости'} ></Buttons>
        <Buttons to={'/documents'} text={'Документы'} ></Buttons>
        <MainImage src='./girl.png'/>
        <Authorization/>
      </main>
    </div>
  );
};

export default Container;
