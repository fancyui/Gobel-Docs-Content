import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/lifepo4-cells/lp-21700/datasheet/">
            查看文档
          </Link>
        </div>
      </div>
    </header>
  );
}

// Product line icons using inline SVG
const CellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"/>
    <line x1="7" y1="10" x2="7" y2="14"/>
    <line x1="10" y1="10" x2="10" y2="14"/>
    <line x1="14" y1="10" x2="14" y2="14"/>
    <line x1="17" y1="10" x2="17" y2="14"/>
  </svg>
);

const LowVoltageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="10" rx="2"/>
    <path d="M6 7V5"/>
    <path d="M10 7V5"/>
    <path d="M14 7V5"/>
    <path d="M18 7V5"/>
    <path d="M6 17v2"/>
    <path d="M18 17v2"/>
    <line x1="6" y1="12" x2="18" y2="12"/>
  </svg>
);

const DIYKitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const BMSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M9 1v3"/>
    <path d="M15 1v3"/>
    <path d="M9 20v3"/>
    <path d="M15 20v3"/>
    <path d="M20 9h3"/>
    <path d="M20 15h3"/>
    <path d="M1 9h3"/>
    <path d="M1 15h3"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const OthersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const HighVoltageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M9 4v16"/>
    <path d="M15 4v16"/>
    <path d="M6 9h4"/>
    <path d="M14 9h4"/>
    <path d="M6 15h4"/>
    <path d="M14 15h4"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const products = [
  {
    title: '低压电池',
    description: 'LV-12V-100Ah 家用储能电池，稳定可靠的备用电源解决方案',
    href: '/docs/low-voltage-battery/lv-12v-100ah/datasheet/',
    Icon: LowVoltageIcon,
  },
  {
    title: '高压电池',
    description: 'HV-48V-200Ah 商用储能系统，大规模工业储能解决方案',
    href: '/docs/high-voltage-battery/hv-48v-200ah/datasheet/',
    Icon: HighVoltageIcon,
  },
  {
    title: 'DIY 套件',
    description: 'DIY 电池组装套件，一站式解决方案满足自定义储能项目需求',
    href: '/docs/diy-kits/',
    Icon: DIYKitIcon,
  },
  {
    title: 'BMS',
    description: '电池管理系统，智能监控与保护电池组安全运行',
    href: '/docs/bms/',
    Icon: BMSIcon,
  },
  {
    title: '磷酸铁锂电芯',
    description: 'LP-21700 高性能锂离子电芯，适用于各类储能应用场景',
    href: '/docs/lifepo4-cells/lp-21700/datasheet/',
    Icon: CellIcon,
  },
  {
    title: '其他产品',
    description: '储能系统配件、工具及配套产品',
    href: '/docs/others/',
    Icon: OthersIcon,
  },
];

function ProductCard({title, description, href, Icon}: {title: string; description: string; href: string; Icon: () => JSX.Element}) {
  return (
    <Link to={href} className={styles.productCard}>
      <div className={styles.productIcon}>
        <Icon />
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productDescription}>{description}</p>
      <span className={styles.productLink}>
        了解更多 <ArrowRightIcon />
      </span>
    </Link>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="Gobel Power 产品文档 - 电芯、低压电池、高压电池">
      <HomepageHeader />
      <main>
        <section className={styles.productSection}>
          <div className="container">
            <div className={styles.productGrid}>
              {products.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
