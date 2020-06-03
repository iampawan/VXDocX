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
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">

          <h1 className="hero__title" style={{ color: 'white', fontWeight: 'bold' }}>{siteConfig.title}</h1>
          <p className="hero__subtitle" style={{ color: 'white' }}>{siteConfig.tagline}</p>
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
      </header>
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
