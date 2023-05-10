import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';

import style from './index.module.css';
import searchSvg from '../../assets/search.svg';
import { fetchRepositories } from '../../actions/githubActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [hasError, setError] = useState(false);

  const handleSubmit = (event) => {
    dispatch(fetchRepositories(inputValue));
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

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        value={inputValue}
        isInvalid={hasError}
        onChange={(event) => handleInputChange(event.target.value)}
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
        className={style.formControl}
      />
      <Button
        onClick={handleSubmit}
        variant="primary"
        type="button"
        value="Submit"
        className={`btn-primary ${style.btnSearch}`}
      >
        <Image className={style.icon} alt="search-icon" src={searchSvg}></Image>
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
