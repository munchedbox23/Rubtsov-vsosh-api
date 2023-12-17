import React, { useState } from 'react';
import axios from 'axios';
import classes from './Form.module.css';
import FormBtn from '../Buttons/FormButtons/FormBtn';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUserId = async (username) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/users/');
      console.log(response);
      if (response.status) {
        const user = response.data.find((user) => user.username === username.replace(/\s/g, ''));
        if (user) {
          sessionStorage.setItem('userId', user.id);
        } else {
          console.error('Пользователь с таким именем не найден');
        }
      } else {
        console.error('Ошибка при получении данных о пользователях');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
        username: username.replace(/\s/g, ''),
        password,
      });

      if (response.data.access) {
        setLoginSuccess(true);
        setIsLoggedIn(true);
        sessionStorage.setItem('username', username);


        fetchUserId(username);
        setTimeout(() => {
          setLoginSuccess(false);
          setUsername('');
          setPassword('');
        }, 5000) 
      } else {
        console.error('Неверные учетные данные');
      }
    } catch (error) {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 4000);
      console.error('Произошла ошибка при запросе на сервер:', error);
      
    }
  };

  const handleRegister = async () => {
    if (!username || !password) {
      setRegistrationError(true);
      return;
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/v1/users/register/', {
        username: username.replace(/\s/g, ''),
        password,
      });
      setUsername('');
      setPassword('');
      setRegistrationSuccess(true);
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Произошла ошибка при запросе на сервер:', error);
    }
  };

  return (
    <div className={classes.Form}>
      <input
        className={classes.FormInput}
        name='username'
        required
        placeholder='Ваше имя'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={classes.FormInput}
        name='password'
        required
        placeholder='Ваш пароль'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormBtn onLogin={handleLogin} onRegister={handleRegister} isLoggedIn={isLoggedIn}/>
      {registrationSuccess && (
        <div className={classes.RegistrationSuccess}>Спасибо за регистрацию! 
        Чтобы получить доступ к публикации задач, необходимо войти</div>
      )}
      {loginSuccess && (
        <div className={classes.LoginSuccess}>Добро пожаловать, {username}!</div>
      )}
      {registrationError && (
        <div className={classes.RegistrationError}>Пожалуйста, заполните форму регистрации.</div>
      )}
      {loginError && (
        <div className={classes.LoginError}>Пожалуйста, проверьте введенные данные.</div>
      )}
    </div>
  );
};

export default Form;


