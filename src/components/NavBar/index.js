import styles from './styles.module.scss';

import Link from 'next/link';

const NavBar = () => (
    <nav className={styles.navbar}>
        <div className={styles.navbar__content}>
            <Link className={styles.navbar__title} href="/">SPACE X</Link>
        </div>

        <ul className={styles['navbar__naviagation-items']}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/rockets">Rockets</Link></li>
        </ul>
    </nav>
)

export { NavBar }
