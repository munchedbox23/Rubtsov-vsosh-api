import classes from './ArchiveClasses.module.css';

const ArchiveTheoryClasses = () => {
  return (
    <div className={classes.Classes}>
      <div className={classes.Cls}>
        <ClassesItem classNum={'9'} href={'./pdf/archive1.pdf'}/>
      <ClassesItem classNum={'10'} href={'./pdf/archive2.pdf'}/>
      <ClassesItem classNum={'11'} href={'./pdf/archive3.pdf'}/>
      </div>
      <div className={classes.Cls}>
        <ClassesItem classNum={'9'} href={'./pdf/archive4.pdf'}/>
      <ClassesItem classNum={'10'} href={'./pdf/archive5.pdf'}/>
      <ClassesItem classNum={'11'} href={'./pdf/archive6.pdf'}/>
      </div>
      <div className={classes.Cls}>
        <ClassesItem classNum={'9'} href={'./pdf/archive7.pdf'}/>
      <ClassesItem classNum={'10'} href={'./pdf/archive8.pdf'}/>
      <ClassesItem classNum={'11'} href={'./pdf/archive9.pdf'}/>
      </div>
    </div>
  )
}
const ArchiveExpClasses = () => {
  return (
    <div className={classes.Classes}>
      <div className={classes.Cls}>
        <ClassesItem classNum={'9'} href={'./pdf/archive10.pdf'}/>
      <ClassesItem classNum={'10'} href={'./pdf/archive11.pdf'}/>
      <ClassesItem classNum={'11'} href={'./pdf/archive12.pdf'}/>
      </div>
      <div className={classes.Cls}>
        <ClassesItem classNum={'9'} href={'./pdf/archive13.pdf'}/>
      <ClassesItem classNum={'10'} href={'./pdf/archive14.pdf'}/>
      <ClassesItem classNum={'11'} href={'./pdf/archive15.pdf'}/>
      </div>
      <div className={classes.Cls}>
        <ClassesItem classNum={'9'} href={'./pdf/archive16.pdf'}/>
      <ClassesItem classNum={'10'} href={'./pdf/archive8.pdf'}/>
      <ClassesItem classNum={'11'} href={'./pdf/archive9.pdf'}/>
      </div>
    </div>
  )
}

export {ArchiveTheoryClasses, ArchiveExpClasses};

const ClassesItem = ({href, classNum}) => {
  return(
  <div className={classes.ClassesItem}>
    <a  rel="noopener noreferrer" target='_blank' href={href} className={classes.ClassesItem}>{classNum} класс</a>
  </div>)
}
