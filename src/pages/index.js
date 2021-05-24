import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/easy.svg",
    description: (
      <>
        VelocityX is designed to be easily installed and
        and the only aim was to make it even more easier to write UIs.
      </>
    ),
  },
  {
    title: <>Responsive Design</>,
    imageUrl: "img/responsive.svg",
    description: (
      <>
        VelocityX lets you focus on your design, and it comes with various widget extensions to make it responsive across the devices. Go
        ahead and check the <code>docs</code>.
      </>
    ),
  },
  {
    title: <>Powered by Flutter</>,
    imageUrl: "img/flutterpower.svg",
    description: (
      <>
        Extend or customize your UI layout by reusing Flutter widgets. VelocityX can
        be extended while reusing the same widgets.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const pHunt = <a href="https://www.producthunt.com/posts/velocityx?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-velocityx" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=289488&theme=light" alt="VelocityX - A minimalist Flutter framework | Product Hunt" style={{ width: 250, height: 54 }} width={250} height={54} /></a>

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (

    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Vx logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/vx.svg')}
            />
            A minimalist Flutter framework inspired from{' '}
            <span className={styles.heroProjectKeywords}>TailwindCSS</span>{' '} and{' '}
            <span className={styles.heroProjectKeywords}>SwiftUI</span> for{' '}
            <span className={styles.heroProjectKeywords}>rapidly</span> building
            custom designs{' '}.

          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl('docs/install')}>
              Start using VelocityX
            </Link>
            <div className={styles.space}></div>
            {pHunt}
            <div className={styles.space}></div>
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=iampawan&amp;repo=velocityx&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                frameBorder="0"
                title="GitHub Stars"
              />
            </span>
            {/* <Link
              className={'margin-left--md', styles.indexTryMeButton}
              to="http://demo.velocityx.dev">
              Try a Demo
            </Link> */}
          </div>
        </div>
      </div>
      <div className={styles.announcement}>
        <div >
          Latest in Vx - {' '}
          <Link to={useBaseUrl('/docs/vxstate/getting_started')} className={styles.announcementInner}>
            State Management
          </Link>
        </div>
      </div>



      {/* <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title" style={{ color: 'white', fontWeight: 'bold' }}>{siteConfig.title}</h1>
          <p className="hero__subtitle" style={{ color: 'white' }}>{siteConfig.tagline}</p>
          {pHunt}
          <div className={styles.buttons}>
            
            <Link
              className={classnames(
                "button  button--secondary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("docs/install")}
            >
              Get Started
              
            </Link>

          </div>
          
        </div>
      </header> */}
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
