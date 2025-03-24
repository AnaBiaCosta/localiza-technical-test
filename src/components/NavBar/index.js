'use client';

import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

import Link from 'next/link';

const NavBar = () => {
    const pathname = usePathname();

    return (
        <nav className={`${styles.navbar} ${pathname === '/' ? styles['navbar--transparent'] : '' }`}>
            <div className={styles.navbar__content}>
                <Link className={styles.navbar__title} href="/">SPACE X</Link>
            </div>
    
            <ul className={styles['navbar__naviagation-items']}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/rockets">Rockets</Link></li>
            </ul>
        </nav>
    )
}

export { NavBar }
