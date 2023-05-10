import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import selector from './selector';

import styles from './index.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardBlock from '../../components/CardBlock';
import ModalBlock from '../../components/ModalBlock';
import LoaderBlock from '../../components/LoaderBlock';
import ButtomContent from '../../components/ButtomContent';
import RepositoriesList from '../../components/RepositoriesList';
import { initializeApp } from '../../actions/githubActions';
import { toggleModal } from '../../reducers/modalReducer';
import { setCurrentPage, setPageCounts } from '../../reducers/repositoriesReducer';

const Home = () => {
  const [cardId, setCardId] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();
  const { repositories, isLoading, cardData, isModalOpen } = useSelector((state) =>
    selector(state, cardId),
  );

  useLayoutEffect(() => {
    dispatch(initializeApp());
    const pageId = Number(location.pathname.replace('/', ''));
    dispatch(initializeApp());
    dispatch(setCurrentPage(pageId));
  }, []);

  useEffect(() => {
    dispatch(setPageCounts());
  }, []);

  const handleToggleModal = (event) => {
    setCardId(event.target.dataset.id);
    dispatch(toggleModal());
  };

  return (
    <>
      {cardData && isModalOpen && (
        <ModalBlock>
          <CardBlock
            data={cardData}
            isModalOpen={isModalOpen}
            handleToggleModal={handleToggleModal}
          />
        </ModalBlock>
      )}
      <Header />
      <main className={styles.wrapper}>
        {repositories.length < 1 ? (
          <h2 className={styles.empty}>Список проектов пуст</h2>
        ) : (
          <>
            {isLoading ? (
              <LoaderBlock />
            ) : (
              <RepositoriesList handleToggleModal={handleToggleModal} filteredList={repositories} />
            )}
            <ButtomContent />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
