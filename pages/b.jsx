import React from 'react';
import styles from '../styles/b.module.css';

function b() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>5</div>
      ::before
      <div className={styles.content}>
        <div className={styles.background}>
          <div className={styles.left}>left</div>
          <div className={styles.right}>right</div>
        </div>
        <div className={styles.contentContainer}>content here...</div>
      </div>
    </div>
  );
}

export default b;
