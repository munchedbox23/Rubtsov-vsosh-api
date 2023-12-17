import classes from './Document.module.css';


const Document = ({season, text, descr}) => {
  return(
    <div className={classes.Document}>
      <div className={classes.DocumentSeason}>Сезон {season}</div>
      <p className={classes.DocumentText}>{text} {descr}</p>
    </div>
  )
}

export default Document;
