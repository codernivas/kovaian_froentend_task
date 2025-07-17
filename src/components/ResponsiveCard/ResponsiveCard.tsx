import React from 'react';
import styles from './ResponsiveCard.module.scss';

const ResponsiveCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Responsive Card</h1>
      <p className={styles.description}>
        This card layout adjusts according to screen size — mobile, tablet, and desktop!
      </p>
    </div>
  );
};

export default ResponsiveCard;
