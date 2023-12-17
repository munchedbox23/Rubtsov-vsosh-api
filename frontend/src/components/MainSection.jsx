import Header from './Header/Header';
import classes from './MainSection.module.css';
import Container from './MainContent/Container';

const MainSection = () => {
  return (
    <div className={classes.Main}>
      <Header/>
      <Container/>
    </div>
  )
}

export default MainSection;
