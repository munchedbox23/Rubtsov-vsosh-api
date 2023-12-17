import classes from './Image.module.css';

const Image = ({src}) => {
  return (
   <img src={src} className={classes.Image} alt="Header_img" />
  )
}

export default Image;
