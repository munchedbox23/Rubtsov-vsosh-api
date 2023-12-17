import classes from './YearsMenu.module.css';

const YearsMenu = () => {
  return( 
    <div className={classes.YearsMenu}>
      <div className={classes.ArchiveYear}>2023</div>
      <div className={classes.ArchiveYear}>2022</div>
      <div className={classes.ArchiveYear}>2021</div>
    </div>
   )
}

export default YearsMenu;
