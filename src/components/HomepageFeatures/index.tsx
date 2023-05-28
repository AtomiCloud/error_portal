import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Full Text Search',
    Svg: require('@site/static/img/full_text_search.svg').default,
    description: (
      <>
        Error Catalog allows for full text search of all error types in AtomiCloud API ecosystem.
      </>
    ),
  },
  {
    title: 'Full Structured',
    Svg: require('@site/static/img/structure.svg').default,
    description: (
      <>
        Errors are displayed in a fully structued format to exclude any 
        ambiguity using JSON Schema, allowing for language agnostic errors
        to be represented by JSON
      </>
    ),
  },
  {
    title: 'Automatically Updated',
    Svg: require('@site/static/img/updatedx.svg').default,
    description: (
      <>
        AtomiCloud Error Portal is automatically updated to the latest every
        hour to display a fully up to date error catalog
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
