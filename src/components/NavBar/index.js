import styles from './styles.module.scss';

import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => (
    <nav className={styles.navbar}>
        <div className={styles.navbar__content}>
            <Image
                src="rocket.svg"
                width={21}
                height={52}
                alt="Rocket"
            />
            <p className={styles.navbar__title}>SPACE X</p>
        </div>

        <ul className={styles['navbar__naviagation-items']}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/rockets">Rockets</Link></li>
        </ul>
    </nav>
)

export { NavBar }
