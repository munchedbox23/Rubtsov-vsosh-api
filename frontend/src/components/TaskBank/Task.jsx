import React from 'react';
import classes from './Task.module.css';

const Task = ({ task, onClickDiscussion, onDeleteTask }) => {
  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={classes.Task}>
      <a href={task.content} target="_blank" rel="noopener noreferrer" className={classes.TaskName}>
        {task.title}
      </a>
      <div className={classes.TaskСreator}>{task.username}</div>
      <button onClick={() => onClickDiscussion(task.id, task.title)} className={classes.TaskDiscussionBtn}>
        Обсуждение
      </button>
      <button onClick={handleDeleteClick} className={classes.TaskDeleteBtn}>
        Удалить
      </button>
    </div>
  );
};

export default Task;
