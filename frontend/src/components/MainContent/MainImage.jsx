import classes from './MainImage.module.css';

const MainImage = ({src}) => {
  return (
    <img className={classes.MainImage} src={src} alt="MainImage" />
  )
}

export default MainImage;
