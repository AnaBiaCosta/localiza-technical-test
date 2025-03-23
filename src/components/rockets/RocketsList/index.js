"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePaginatedRockets } from "@/hooks/usePaginatedRockets";

import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import styles from './styles.module.scss';
import { RocketCard } from '../RocketCard';

const RocketsList = () => {
    const router = useRouter();

    const [page, setPage] = useState(1);
    const limit = 10;
    const { data: rocketsData, isFetching } = usePaginatedRockets(page, limit);

    const handleClickRocketItem = (id) => {
        router.push(`/rockets/${id}`);
    }

    const handleChangePage = (_, page) => {
        setPage(page);
    }

    return (
        <section className={styles['rockets-list']}>
            {isFetching && <CircularProgress />}

            <div className={styles['rockets-list__list-wrapper']}>
                { rocketsData?.data?.map((rocket) => (
                <RocketCard key={rocket?.localId} rocket={rocket} onClick={handleClickRocketItem} />
                ))}
            </div>

            <div className={styles['rockets-list__pagination']}>
                <Pagination count={rocketsData?.totalPages} size="small" page={rocketsData?.page} onChange={handleChangePage} />
            </div>
        </section>
    )
};

export { RocketsList };
