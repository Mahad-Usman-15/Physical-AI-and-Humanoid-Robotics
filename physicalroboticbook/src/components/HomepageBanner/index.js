import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageBanner.module.css';

const HomepageBanner = () => {
  return (
    <section className={clsx('hero', styles.homepageBanner)}>
      <div className="container text--center">
        <h2 className={styles.bannerTitle}>Ready to Read Physical AI & Humanoid Robotics?</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Reading Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner;
