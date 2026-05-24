import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Python School
        </Heading>
        <p className={styles.subtitle}>
          Practical Python learning for engineers who want clear concepts,
          production thinking, and interview readiness.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/school/python/intro/what-is-python">
            Start Python School
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/school/python/interview-prep/top-python-interview-questions">
            Interview Prep
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Practical Python school for production engineering and interviews.">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <Link className={styles.card} to="/docs/school/python/intro/setup-python">
                <h2>Learn The Foundation</h2>
                <p>Start with setup, execution flow, and your first Python program.</p>
              </Link>
              <Link className={styles.card} to="/docs/school/python/collections/lists">
                <h2>Build Core Skills</h2>
                <p>Move through fundamentals, control flow, functions, and collections.</p>
              </Link>
              <Link className={styles.card} to="/docs/school/python/interview-prep/top-python-interview-questions">
                <h2>Practice Interviews</h2>
                <p>Use code-heavy cheat sheets and quizzes to validate your answers.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
