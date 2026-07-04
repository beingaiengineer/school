import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ------------------------------------------------------------------ */
/*  Course catalog - Bento layout matching the Stitch Design          */
/* ------------------------------------------------------------------ */
interface Course {
  emoji: string;
  title: string;
  description: string;
  topicCount: string;
  href: string;
  accent: string;
  available: boolean;
  featured?: boolean;
}

const courses: Course[] = [
  {
    emoji: '🐍',
    title: 'Backend Engineering with Python',
    description:
      'Master practical backend engineering. Build scalable APIs, handle background processing, manage databases, and deploy production-ready systems using FastAPI and Django.',
    topicCount: '120+ lessons',
    href: '/docs/school/python/intro/what-is-python',
    accent: 'var(--course-python)',
    available: true,
    featured: true,
  },
  {
    emoji: '🤖',
    title: 'Agentic Frameworks',
    description:
      'Master AI agents, LangChain, LangGraph, CrewAI, and multi-agent systems.',
    topicCount: 'Live',
    href: '/docs/school/agentic-frameworks/intro/what-are-ai-agents',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🛡️',
    title: 'App Security',
    description:
      'Secure applications against OWASP top 10, handle auth, and protect data.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🚀',
    title: 'CI/CD Pipelines',
    description:
      'Automate testing, builds, and deployments with GitHub Actions.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '⚡',
    title: 'FastAPI Concepts',
    description:
      'Deep dive into building high-performance REST APIs with FastAPI.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🌿',
    title: 'Git Workflows',
    description:
      'Master advanced Git, rebase, merge strategies, and team collaboration.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🚨',
    title: 'Incident Management',
    description:
      'Handle production outages, runbooks, and post-mortems like a pro.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '📊',
    title: 'Observability',
    description:
      'Implement logging, metrics, and tracing for production systems.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🧩',
    title: 'OOP & Patterns',
    description:
      'Object-oriented programming and essential software design patterns.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🚢',
    title: 'Release & Deployment',
    description:
      'Strategies for safely rolling out code to millions of users.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '📏',
    title: 'Requirements & Estimation',
    description:
      'Learn how to break down complex projects and estimate work.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🔄',
    title: 'SDLC & Agile',
    description:
      'The software development lifecycle, Scrum, Kanban, and sprints.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '📈',
    title: 'SLIs & SLOs',
    description:
      'Define, measure, and manage service level reliability objectives.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '🧪',
    title: 'Software Testing',
    description:
      'Unit, integration, and E2E testing strategies for bulletproof code.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
  {
    emoji: '👥',
    title: 'Team Structure',
    description:
      'How modern engineering organizations and tech teams are structured.',
    topicCount: 'Coming soon',
    href: '#',
    accent: 'var(--course-coming-soon)',
    available: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Value propositions                                                 */
/* ------------------------------------------------------------------ */
interface ValueProp {
  icon: string;
  title: string;
  text: string;
}

const valueProps: ValueProp[] = [
  {
    icon: '⚙️',
    title: 'Real-world Projects',
    text: 'Build complex, portfolio-ready applications that solve actual engineering problems, not toy examples.',
  },
  {
    icon: '✅',
    title: 'Production Standards',
    text: 'Learn CI/CD, testing, logging, and monitoring from day one. Code like you are already on a senior team.',
  },
  {
    icon: '💬',
    title: 'Mentor Support',
    text: 'Get code reviews and architecture feedback from engineers who have shipped products at scale.',
  },
  {
    icon: '🚀',
    title: 'Career Outcomes',
    text: 'Our curriculum is reverse-engineered from the technical interviews of top-tier tech companies.',
  },
];

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroPattern} />
      <div className="container relative z-10">
        <div className={styles.cohortBadge}>
          <span className={styles.badgePulse}></span>
          <span>Winter 2024 Cohort Open</span>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          <span className={styles.titleSub}>BAE School</span>
          <span className={styles.textGradient}>Practical Engineering.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          <strong>Learn</strong> the theory. <strong>Build</strong> the systems. <strong>Ship</strong> to production. We forge software engineers, not just coders.
        </p>
        <div className={styles.heroCta}>
          <Link
            className="button button--primary button--lg"
            to="/docs/school/python/intro/what-is-python">
            Join the Lab
          </Link>
          <Link
            className={`button button--outline button--lg ${styles.heroCtaSecondary}`}
            to="/docs/school/python/interview-prep/top-python-interview-questions">
            View Curriculum
          </Link>
        </div>
        
        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>120+</span>
            <span className={styles.statLabel}>Lessons</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>20</span>
            <span className={styles.statLabel}>Sections</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>10k+</span>
            <span className={styles.statLabel}>Students</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>Placement</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function CourseCard({course}: {course: Course}) {
  const inner = (
    <div
      className={`${styles.courseCard} ${course.featured ? styles.courseCardFeatured : ''} ${!course.available ? styles.courseCardDisabled : ''}`}
      style={{'--card-accent': course.accent} as React.CSSProperties}>
      <div className={styles.cardHeader}>
        <div className={styles.courseEmoji}>{course.emoji}</div>
        {course.available ? (
          <div className={styles.liveBadge}>
            <span className={styles.livePulse}></span>
            <span>Live Now</span>
          </div>
        ) : (
          <div className={styles.soonBadge}>Coming Soon</div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDesc}>{course.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.courseMeta}>
          {course.available ? '📚 ' : '🕐 '}
          {course.topicCount}
        </span>
        {course.available && (
          <span className={styles.courseCtaArrow}>Start Track →</span>
        )}
      </div>
    </div>
  );

  if (course.available) {
    return (
      <Link to={course.href} className={`${styles.courseLink} ${course.featured ? styles.gridColSpan2 : ''}`}>
        {inner}
      </Link>
    );
  }
  return inner;
}

function CourseCatalog() {
  return (
    <section className={styles.section} id="courses">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Engineering Tracks</h2>
          <p className={styles.sectionSubtitle}>
            Master the core stack required for modern production systems.
          </p>
        </div>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why BAE School?</h2>
          <p className={styles.sectionSubtitle}>
            We don't teach syntax. We teach you how to build real systems that scale.
          </p>
        </div>
        <div className={styles.valueGrid}>
          {valueProps.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueText}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="BAE School — a practical engineering school for Python, JavaScript, DevOps, AI, and more.">
      <HeroBanner />
      <main>
        <CourseCatalog />
        <WhySection />
      </main>
    </Layout>
  );
}
