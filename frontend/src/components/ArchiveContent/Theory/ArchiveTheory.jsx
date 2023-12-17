import classes from './ArchiveContent.module.css';
import { ArchiveTheoryClasses } from '../ArchiveClasses';

const ArchiveTheory = () => {
  return (
    <div className={classes.Theory}>
      <div className={classes.TabHead}>Теоретический тур</div>
      <ArchiveTheoryClasses/>
    </div>
  )
}

export default ArchiveTheory;
