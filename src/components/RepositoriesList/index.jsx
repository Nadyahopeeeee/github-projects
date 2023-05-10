import React from 'react';

import CardBlock from '../CardBlock';
import style from './index.module.css';

const RepositoriesList = ({ filteredList, handleToggleModal }) => {
  return (
    <div className={style.wrapper}>
      {filteredList &&
        filteredList.map((repo) => (
          <CardBlock handleToggleModal={handleToggleModal} data={repo} key={repo.id} />
        ))}
    </div>
  );
};

export default RepositoriesList;
