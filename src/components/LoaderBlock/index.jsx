import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';

import styles from './index.module.css';

const LoaderBlock = () => {
  return (
    <div className={styles.loader}>
      <h2 className={styles.title}>Поиск проектов...</h2>
      <div className={styles.fakeContent}></div>
    </div>

    // <Card className={styles.wrapper}>
    //   <Card.Body className={styles.project}>
    //     <Placeholder as="p" animation="glow">
    //       <Placeholder xs={3} size="lg" />
    //     </Placeholder>
    //     <Placeholder as="p" animation="glow">
    //       <Placeholder xs={2} size="lg" /> <Placeholder xs={3} size="lg" />
    //     </Placeholder>
    //     <Placeholder as="p" animation="glow">
    //       <Placeholder xs={1} size="lg" /> <Placeholder xs={1} size="lg" />{' '}
    //       <Placeholder xs={1} size="lg" /> <Placeholder xs={1} size="lg" />
    //     </Placeholder>
    //     <Placeholder as="p" animation="glow">
    //       <Placeholder xs={12} size="lg" />
    //     </Placeholder>
    //   </Card.Body>
    // </Card>
  );
};

export default LoaderBlock;
