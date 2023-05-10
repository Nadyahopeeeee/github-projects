import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';

import styles from './index.module.css';
import pencilSvg from '../../../assets/pencil.svg';
import { setCommentById, removeCommentByName } from '../../../actions/githubActions';

const CommentBlock = ({ cardId, commentaries }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [hasError, setError] = useState(false);

  const handleSubmit = (event) => {
    dispatch(setCommentById(cardId, inputValue));
    setInputValue('');
  };

  const handleRemoveComment = (event) => {
    dispatch(removeCommentByName(cardId, event.target.dataset.value));
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    if (!value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const commentariesList =
    commentaries &&
    commentaries.map((comment, i) => (
      <li className={styles.comment} key={i}>
        {i + 1}. {comment}
        <Button
          data-value={comment}
          variant="light"
          className={styles.removeButton}
          onClick={(event) => handleRemoveComment(event)}
        >
          x
        </Button>
      </li>
    ));

  return (
    <div className={styles.wrapper}>
      <InputGroup className="mb-3 input">
        <Form.Control
          value={inputValue}
          isInvalid={hasError}
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder="Комментарий к проекту"
          className={styles.input}
        />
        <Button
          className={styles.searchButton}
          onClick={handleSubmit}
          variant="primary"
          type="button"
          value="Submit"
        >
          <Image className={styles.icon} alt="pencil-icon" src={pencilSvg}></Image>
        </Button>
      </InputGroup>
      <ul className={styles.list}>{commentariesList}</ul>
    </div>
  );
};

export default CommentBlock;
