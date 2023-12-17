import classes from './Authorization.module.css';
import Form from './Form';

const Authorization = () => {

  return (
    <div className={classes.Authorization}>
      <div className={classes.AuthWrapper}>
        <div className={classes.AuthHeader}>Авторизация для составителей задач</div>
        <Form/>
      </div>
    </div>
    
  )
}

export default Authorization;
