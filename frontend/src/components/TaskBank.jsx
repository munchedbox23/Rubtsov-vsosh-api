import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import classes from './TaskBank.module.css';
import Task from './TaskBank/Task';
import Discussion from './Discussion';


const TaskBank = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskId, setTaskId] = useState(null);
  const [file, setFile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [discussionVisible, setDiscussionVisible] = useState(false);
  const [selectedTaskName, setSelectedTaskName] = useState('');
  const [comments, setComments] = useState([]);
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [loggedInId, setLoggedInId] = useState('');

  
  useEffect(() => {
    fetchTasks();
    const storedUsername = sessionStorage.getItem('username');
    const storageId = sessionStorage.getItem('userId');
    if (storedUsername && storageId) {
      setLoggedInUsername(storedUsername);
      setLoggedInId(storageId);

    }
  }, []);

  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/tasks/');
      if (response.status) {
        setTasks(response.data);
      } else {
        console.error('Ошибка при загрузке задач');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  }, []);



  const handleAddTask = async () => {
    try {
      const taskData = new FormData();
      taskData.append('title', taskName);
      taskData.append('username', loggedInUsername);
      taskData.append('user', loggedInId);
      taskData.append('content', file);

      const response = await axios.post('http://127.0.0.1:8000/api/v1/tasks/create/', taskData);

      console.log(response);

      if (response.status) {
        console.log('Задача успешно добавлена');
        await fetchTasks();
        setOpen(false);
        setTaskName('');
        setFile(null);
      } else {
        console.log('Полный ответ сервера:', response);
        console.error('Ошибка при добавлении задачи');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  const handleDiscussionClick = (taskId, taskName) => {
    setSelectedTaskName(taskName);
    setDiscussionVisible(true);
    setComments([]);
    setTaskId(taskId);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/v1/tasks/${taskId}/delete/`);
      
      if (response.status) {
        console.log('Задача успешно удалена');
        fetchTasks();
      } else {
        console.error('Ошибка при удалении задачи');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  

  return (
    <div className={classes.TaskBank}>
      <div className={classes.TaskAuthorName}>
        {loggedInUsername ? `Вы вошли в систему под именем ${loggedInUsername}` : 'Вы не вошли в систему'}
      </div>
      <div className={classes.TaskBankContainer}>
        <h2 className={classes.TaskBankHeader}>банк задач</h2>
        <div className={classes.TaskBankTH}>
          <div className={classes.TaskTitle}>Предложенная задача</div>
          <div className={classes.TaskAuthor}>Автор</div>
        </div>
        <div className={classes.TasksContainer}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onClickDiscussion={() =>handleDiscussionClick(task.id, task.title)}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
        <button onClick={() => setOpen(true)} className={classes.TaskBtn}>
          Добавить задачу
        </button>
        {open && (
          <div className={classes.Overlay}>
            <div className={classes.Modal}>
              <div className={classes.FileUpload}>
                <input
                  accept='.pdf'
                  name='upload'
                  type='file'
                  onChange={handleFileChange}
                />
                <div
                  className={classes.Close}
                  onClick={() => setOpen(false)}
                  data-close
                >
                  &times;
                </div>
              </div>
              <input
                placeholder='Введите название задачи'
                name='taskName'
                type='text'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <button onClick={handleAddTask}>Отправить</button>
            </div>
          </div>
        )}
        {discussionVisible && (
          <Discussion
            userId={loggedInId}
            taskId={taskId}
            TaskName={selectedTaskName}
            setDiscussionVisible={setDiscussionVisible}
            comments={comments}
            setComments={setComments}
          />
        )}
      </div>
    </div>
  );
};

export { TaskBank };
