import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';

import styles from './index.module.css';
import pencilSvg from '../../../assets/pencil.svg';
import { setCommentById, removeCommentById } from '../../../actions/githubActions';

const CommentBlock = ({ cardId, commentaries }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [hasError, setError] = useState(false);

  const handleSubmit = (event) => {
    dispatch(setCommentById(cardId, inputValue));
    setInputValue('');
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    if (!value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const removeComment = (index) => {
    const newCommentaries = [...commentaries];
    newCommentaries.splice(index, 1);
    dispatch(removeCommentById(cardId, newCommentaries));
  };

  return (
    <div className={styles.wrapper}>
      <InputGroup className="mb-3 input">
        <Form.Control
          value={inputValue}
          isInvalid={hasError}
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder="Комментарий к проекту"
          className="form-control"
        />
        <Button onClick={handleSubmit} variant="primary" type="button" value="Submit">
          <Image className={styles.icon} alt="pencil-icon" src={pencilSvg}></Image>
        </Button>
      </InputGroup>
      <ul className={styles.list}>
        {commentaries &&
          commentaries.map((comment, i) => (
            <li className={styles.comment} key={`${comment}_${i}`}>
              {comment}
              <button className={styles.removeButton} onClick={() => removeComment(i)}>
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CommentBlock;
