import styles from './rockets.module.scss';

import { RocketCard } from '@/components/rockets/RocketCard/RocketCard';

import rocketsMock from './rockets.mock.json';

const RocketsPage = () => {
  const handleClick = () => {};

  return (
    <main className={styles.rockets}>
        <div>
          <h1 className={styles.rockets__title}>Rockets</h1>

          <section className={styles['rockets__items-wrapper']}>
            {rocketsMock?.map((rocket) => (
              <RocketCard key={rocket?.id} rocket={rocket} onClick={handleClick} />
            ))}
          </section>
        </div>
    </main>
  )
}

export default RocketsPage;
