import classes from './Documents.module.css';
import Document from './Documents/Document';

const Documents = () => {
  return(
    <section id='Documents' className={classes.Documents}>
      <div className={classes.DocumentsContainer}>
        <h2 className={classes.DocumentsHeader}>Документы</h2>
        <Document season={'2023-2024'} text={`Приказ Министерства просвещения "Об утверждении состава ЦПМК от 31.08.2023". `} descr={'Требования ЦПМК к проведению регионального этапа от 17.09.2023'}/>
        <Document season={'2022-2023'} text={`Приказ Министерства просвещения "Об утверждении состава ЦПМК от 31.08.2022". `} descr={'Требования ЦПМК к проведению регионального этапа от 21.09.2022'}/>
        <Document season={'2022-2023'} text={`Приказ Министерства просвещения "Об утверждении состава ЦПМК от 31.08.2022". `} descr={'Требования ЦПМК к проведению регионального этапа от 21.09.2022'}/>
      </div>
    </section>
  )
}


export {Documents};
