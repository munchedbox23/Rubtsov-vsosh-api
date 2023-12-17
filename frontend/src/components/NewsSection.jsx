import classes from './NewsSection.module.css';
import NewsContent from './News/NewsContent';

const NewsSection = () => {
  return(
    <section id='News' className={classes.News}>
      <div className={classes.NewsCont}>
      <h2 className={classes.NewsHeader}>Новости</h2>
      <div className={classes.NewsContainer}>
        <NewsContent data={'01.10.2023'} text={'Опубликованы требования к проведению РЭ ВсОШ по физике (см. раздел Документы)'} ></NewsContent>
        <NewsContent data={'01.09.2023'} text={'Стал известен состав Центральной предметно-методической комиссии ВсОШ на 2023-2024 учебный год (см. раздел Документы)'}></NewsContent>
        <NewsContent data={'01.08.2023'} text={'Загружены все задания за прошедший олимпиадный год (см. раздел Архив заданий)'}></NewsContent>
      </div>
      </div>
    </section>
  )
}

export {NewsSection};
