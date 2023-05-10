import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import styles from './index.module.css';
import eyeSvg from '../../assets/eye.svg';
import starSvg from '../../assets/star.svg';
import CommentBlock from './CommentBlock';

import { useDispatch, useSelector } from 'react-redux';
import { removeProjectById } from '../../actions/githubActions';
import selector from './../../pages/Home/selector';

const CardBlock = (props) => {
  const dispatch = useDispatch();
  const { stargazers_count, watchers, owner, name, id, commentaries } = props.data;
  const { handleToggleModal, isModalOpen } = props;
  const url = `https://github.com/orgs/${owner.login}`;

  const handleRemove = (event) => {
    const question = window.confirm('Подтверждаете удаление?');

    if (question) {
      dispatch(removeProjectById(event.target.dataset.id));
      alert('Пользователь удален!');
    } else {
      alert('Операция прервана');
    }
  };

  return (
    <>
      {
        <Card className={styles.wrapper}>
          <Card.Body className={styles.project}>
            <div className={styles.topContent}>
              <Link to={url}>
                <Card.Title className={styles.title}>{name}</Card.Title>
              </Link>
              <Button variant="danger" data-id={id} onClick={handleRemove}>
                удалить
              </Button>
            </div>
            <div className={styles.mainContent}>
              <div className={styles.autor}>
                <div className={styles.autorPhoto}>
                  <Card.Img rounded="true" src={owner.avatar_url} alt="Autor-photo" />
                </div>
                <Link to={`${url}/repositories`}>
                  <Card.Subtitle className={styles.autorName}>{owner.login}</Card.Subtitle>
                </Link>
              </div>
              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <Card.Img className={styles.infoIcon} src={starSvg} alt="Star-icon" />
                  <Card.Text className={styles.infoQuantity}>{stargazers_count}</Card.Text>
                </div>
                <div className={styles.infoItem}>
                  <Card.Img className={styles.infoIcon} src={eyeSvg} alt="Eye-icon" />
                  <Card.Text className={styles.infoQuantity}>{watchers}</Card.Text>
                </div>
              </div>
            </div>
            <CommentBlock cardId={id} commentaries={commentaries}></CommentBlock>
            <Button variant="secondary" data-id={id} onClick={handleToggleModal}>
              {isModalOpen ? 'закрыть' : 'открыть'}
            </Button>
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default CardBlock;
