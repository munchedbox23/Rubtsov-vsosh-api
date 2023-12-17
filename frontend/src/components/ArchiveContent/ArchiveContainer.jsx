import classes from './ArchiveContainer.module.css';
import YearsMenu from './YearsMenu';
import ArchiveTheory from './Theory/ArchiveTheory';
import ArchiveExp from './Theory/ArchiveExp';

const ArchiveContainer = () => {
  return (
    <div className={classes.ArchiveContainer}>
      <h2 className={classes.ArchiveHeader}>Задания регионального этапа Всероссийской олимпиады школьников по физике</h2>
      <div className={classes.ArchiveWrapper}>
        <YearsMenu/>
        <div className={classes.ArchiveContent}>
            <ArchiveTheory/>
            <ArchiveExp/>
        </div>
      </div>
    </div>
  )
}

export default ArchiveContainer;
