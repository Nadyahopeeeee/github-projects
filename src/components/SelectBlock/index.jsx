import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import { setItemsCount, setPageCounts } from '../../reducers/repositoriesReducer';
import style from './index.module.css';

const SelectBlock = () => {
  const dispatch = useDispatch();
  const itemNumbers = [10, 25, 50];
  const [activeOption, setActiveOption] = useState(itemNumbers[0]);

  useEffect(() => {
    dispatch(setItemsCount(activeOption));
    dispatch(setPageCounts());
  }, [activeOption, dispatch]);

  return (
    <Form.Select
      onChange={(event) => setActiveOption(Number(event.target.value))}
      className={style.select}
      size="lg"
      aria-label="Default select example"
    >
      {itemNumbers.map((num, index) => (
        <option key={index} value={num}>
          {num}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectBlock;
