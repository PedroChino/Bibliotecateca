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
    title: 'Os Nosso Livros',
    Svg: require('@site/static/img/index1.svg').default,
    description: (
      <>
        Aprende sobre os nosso livros ao veres os cartavez dinamicos na pagina 
        dos livros
      </>
    ),
  },
  {
    title: 'Mentes Creativas',
    Svg: require('@site/static/img/index2.svg').default,
    description: (
      <>
        Inspirate em criar os teus proprios livros atravez das criações do nossos 
        proficionais artisticos
      </>
    ),
  },
  {
    title: 'A Nossa Equipa',
    Svg: require('@site/static/img/index3.svg').default,
    description: (
      <>
        Aprende sobre a nossa equipa, o porque que desenvolve-mos este site as nossas motivações, etc
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
