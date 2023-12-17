import classes from './ArchiveSection.module.css';
import ArchiveContainer from './ArchiveContent/ArchiveContainer';

const ArchiveSection = () => {
  return(
    <div id='Archive' className={classes.Archive}>
      <ArchiveContainer/>
    </div>
  ) 
}

export {ArchiveSection};
