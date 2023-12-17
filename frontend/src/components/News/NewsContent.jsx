import classes from './NewsContent.module.css';

const NewsContent = ({data, text}) => {
  return(
    <div className={classes.NewsContent}>
      <div className={classes.NewsData}>{data}</div>
      <div className={classes.NewsText}>{text}</div>
    </div>
  )
}

export default NewsContent;
