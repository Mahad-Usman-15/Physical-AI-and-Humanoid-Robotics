import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSections from '@site/src/components/HomepageSections';
import HomepageBanner from '@site/src/components/HomepageBanner';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className={styles.heroTitle}>
              Physical AI & Humanoid Robotics Textbook
            </Heading>
            <p className={styles.heroSubtitle}>
              A complete and practical learning system where you master the future: humanoid robotics, ROS 2, large action models, simulation, VLA systems, hardware, and advanced AI for next-generation intelligent machines.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Start Reading
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <img src="/img/herophoto.jpg" alt="Hero Image" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSections />
        <HomepageBanner />
      </main>
    </Layout>
  );
}
