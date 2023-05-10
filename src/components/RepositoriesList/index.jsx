import React from 'react';
import { useSelector } from 'react-redux';
import selector from '../../pages/Home/selector';

import CardBlock from '../CardBlock';
import style from './index.module.css';

const RepositoriesList = ({ filteredList, handleOpenModal }) => {
  return (
    <div className={style.wrapper}>
      {filteredList &&
        filteredList.map((repo) => (
          <CardBlock handleOpenModal={handleOpenModal} data={repo} key={repo.id} />
        ))}
    </div>
  );
};

export default RepositoriesList;
