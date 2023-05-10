import { useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

import selector from './selector';
import styles from './index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../reducers/repositoriesReducer';

const PaginationBlock = ({ onChangePage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pagesAmount, pageId } = useSelector(selector);

  const goToPage = (pageNumber) => {
    navigate(`/${pageNumber}`);
    dispatch(setCurrentPage(pageNumber));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (pagesAmount <= 1) {
    return <></>;
  }

  return (
    <Pagination size="lg" className={styles.pagination}>
      <Pagination.Prev disabled={pageId === 1} onClick={() => goToPage(pageId - 1)} />
      {pagesAmount > 1 &&
        Array.from(Array(pagesAmount).keys()).map((currentPageId) => {
          return (
            <Pagination.Item
              className={styles.item}
              active={currentPageId + 1 === pageId}
              key={currentPageId}
              onClick={() => goToPage(currentPageId + 1)}
            >
              {currentPageId + 1}
            </Pagination.Item>
          );
        })}
      <Pagination.Next disabled={pageId === pagesAmount} onClick={() => goToPage(pageId + 1)} />
    </Pagination>
  );
};

export default PaginationBlock;
