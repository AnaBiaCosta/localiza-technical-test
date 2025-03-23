import styles from './styles.module.scss';
import Link from 'next/link';

const HomePage = () => (
  <main className={styles.home}>
    <section className={styles.home__wrapper}>
      <div className={styles.home__content}>
        <h1>WE HAVE THE MOST MODERN ROCKETS IN THE WORLD</h1>
        <Link href="/rockets">LEARN MORE</Link>
      </div>
    </section>
  </main>
);

export default HomePage;
