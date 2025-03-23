import styles from './rockets.module.scss';

import { RocketsList } from '@/components/rockets/RocketsList';

import rocketsMock from './rockets.mock.json';

const RocketsPage = () => {
  return (
    <main className={styles.rockets}>
        <div>
          <h1 className={styles.rockets__title}>Rockets</h1>

          <RocketsList serverSideRocketsList={rocketsMock} />
        </div>
    </main>
  )
}

export default RocketsPage;
