import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Discussion.module.css';

const Discussion = ({userId, taskId, TaskName, setDiscussionVisible, comments, setComments }) => {
  const [comment, setComment] = useState('');


  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/v1/comments/`);
      setComments(response.data.filter(comment => comment.task === taskId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [taskId]);

  const handleAddComment = async () => {
    if (comment) {
      try {
        const newComment = {
          user: userId,
          task: taskId,
          content: comment,
        };

        await axios.post('http://127.0.0.1:8000/api/v1/comments/create/', newComment);
        fetchComments();
        setComment('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/comments/${commentId}/delete/`);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseDiscussion = () => {
    setDiscussionVisible(false);
  };

  return (
    <section className={classes.Discussion}>
      <div className={classes.DiscussionContainer}>
        <button onClick={handleCloseDiscussion} className={classes.CloseButton}>
          &times;
        </button>
        <div className={classes.DiscussionTitle}>{TaskName}</div>
        <div className={classes.Discussions}>
          {comments.map((comment, index) => (
            <div key={index} className={classes.DiscussionContent}>
              <div className={classes.CommentPerson}>{comment.username}</div>
              <div className={classes.Comment}>{comment.content}</div>
              <button onClick={() => handleDeleteComment(comment.id)} className={classes.DeleteButton}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.CommentInputContainer}>
        <textarea
          className={classes.CommentInput}
          placeholder="Введите комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment} className={classes.DiscussionBtn}>
          Добавить комментарий
        </button>
      </div>
    </section>
  );
};

export default Discussion;
