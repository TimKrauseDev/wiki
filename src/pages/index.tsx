import Layout from '@theme/Layout';

import GridWrapper from '@site/src/providers/GridProvider';
import LinkCardGroup from '@site/src/components/LinkCardGroup';
import Spacer from '@site/src/components/Spacer';
import { PropType as LinkProps } from '@site/src/components/LinkCard';

import styles from './index.module.scss';

const linkItems: LinkProps[] = [
  {
    title: 'Recipes',
    Svg: require('@site/static/img/home-plants.svg').default,
    linkTo: '/docs/recipes/intro',
  },
  {
    title: 'Plants',
    Svg: require('@site/static/img/home-recipes.svg').default,
    linkTo: '/docs/plants/current',
  },
  {
    title: 'Misc',
    Svg: require('@site/static/img/home-misc.svg').default,
    linkTo: '/docs/misc/intro',
  },
]

const HomepageHero = (): JSX.Element => {
  return (
    <div className="container">
        <div className={styles.heroBanner}>
          <Spacer height={2} />
          <h1>Welcome!</h1>
          <p className='lead'>This is Tim's Wiki of Information</p>
          <Spacer height={2} />
        </div>
    </div>
  );
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <div className="container">
      <LinkCardGroup linkItems={linkItems} />
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <GridWrapper>
      <Layout title="Home">
        <main>
          <Spacer height={4} />
          <HomepageHero />
          <Spacer height={4} />
          <HomepageFeatures />
          <Spacer height={4} />
        </main>
      </Layout>
    </GridWrapper>
  );
}
