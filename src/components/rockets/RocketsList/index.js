"use client";

import styles from './styles.module.scss';
import { RocketCard } from '../RocketCard';

const RocketsList = ({ serverSideRocketsList }) => {
    const handleClickRocketItem = (id) => {
        console.log(id)
    }

    return (
        <section className={styles['rockets-list']}>
            {serverSideRocketsList?.map((rocket) => (
            <RocketCard key={rocket?.id} rocket={rocket} onClick={handleClickRocketItem} />
            ))}
        </section>
    )
};

export { RocketsList };
