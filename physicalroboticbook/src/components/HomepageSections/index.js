import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './HomepageSections.module.css';

const Section = ({ title, description, Svg, link, linkText }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={clsx('col col--4', 'scroll-reveal')}>
      <div className="text--center">
        {Svg && <Svg className={styles.sectionSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && linkText && (
          <a href={link} className="button button--primary">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

const HomepageSections = () => {
  const sections = [
    {
      title: 'Why Physical AI?',
      description: 'Explore the reasons behind the rise of Physical AI and its impact.',
      // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      link: '#',
      linkText: 'Learn More',
    },
    {
      title: 'What You’ll Learn',
      description: 'A detailed overview of the topics and skills you will acquire.',
      // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      link: '#',
      linkText: 'Discover',
    },
    {
      title: 'Book Modules Overview',
      description: 'Breakdown of the book into modules, chapters, and practical labs.',
      // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      link: '#',
      linkText: 'View Modules',
    },
    {
      title: 'Future of Humanoid Robotics',
      description: 'Insights into the cutting-edge advancements and future prospects of humanoid robots.',
      // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      link: '#',
      linkText: 'Explore Future',
    },
  ];

  return (
    <section className={styles.homepageSections}>
      <div className="container">
        <div className="row">
          {sections.map((props, idx) => (
            <Section key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageSections;
