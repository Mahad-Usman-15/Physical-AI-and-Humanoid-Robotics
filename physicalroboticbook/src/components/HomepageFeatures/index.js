import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ModuleList = [
  {
    title: 'Module 1: ROS2',
    description: (
      <>
        Introduction to the Robot Operating System 2.
      </>
    ),
    buttonLink: '/docs/modules/module-1-ros2/chapter-1',
    buttonText: 'Read',
  },
  {
    title: 'Module 2: Simulation',
    description: (
      <>
        Learn how to simulate robots in virtual environments.
      </>
    ),
    buttonLink: '/docs/modules/module-2-simulation/chapter-1',
    buttonText: 'Read',
  },
  {
    title: 'Module 3: Nvidia Isaac',
    description: (
      <>
        Explore the Nvidia Isaac platform for robotics.
      </>
    ),
    buttonLink: '/docs/modules/module-3-nvidia-isaac/chapter-1',
    buttonText: 'Read',
  },
  {
    title: 'Module 4: VLA',
    description: (
      <>
        Understand Vision-Language-Action models in robotics.
      </>
    ),
    buttonLink: '/docs/modules/module-4-vla/chapter-1',
    buttonText: 'Read',
  },
];

const ImportanceList = [
    {
        title: 'Comprehensive Learning',
        description: (
          <>
            From basics to advanced topics, this book covers everything.
          </>
        ),
      },
      {
        title: 'Practical Approach',
        description: (
          <>
            Hands-on projects and real-world examples.
          </>
        ),
      },
      {
        title: 'Future-Proof Skills',
        description: (
          <>
            Master the technologies that will shape the future of robotics.
          </>
        ),
      },
]

function Feature({title, description, buttonLink, buttonText, className}) {
  return (
    <div className={clsx('col', className, styles.featureCard)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {buttonLink && (
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--md"
              to={buttonLink}>
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.gridRow)}>
          {ModuleList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
            <div className="col text--center">
                <Heading as="h2" className="padding-top--lg">Why This Book is Important</Heading>
            </div>
        </div>
        <div className={clsx('row', styles.gridRow)}>
          {ImportanceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
