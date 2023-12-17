import classes from './ArchiveContent.module.css';
import { ArchiveExpClasses } from '../ArchiveClasses';
const ArchiveExp = () => {
  return (
    <div className={classes.Theory}>
      <div className={classes.TabHead}>Экспериментальный тур</div>
      <ArchiveExpClasses/>
    </div>
  )
}

export default ArchiveExp;
