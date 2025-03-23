import styles from './styles.module.scss';
import rocketMock from './rocket.mock.json';

import Image from 'next/image';

import { AboutCards } from '@/components/rocket-detials/AboutCards';
import { TechnicalSheetList } from '@/components/rocket-detials/TechnicalSheetList';

const RocketDetailPage = async ({ params }) => {
    const { rocket_id } = await params;

    return (
        <main className={styles["rocket-details"]}>
            <Image
                src={rocketMock?.flickr_images[0]}
                style={{width: '100%', height: '700px', objectFit: 'cover', objectPosition: 'top'}}
                width={500}
                height={500}
                alt="Picture of the author"
            />

            <section>
                <h1 className={styles["rocket-details__title"]}>{rocketMock?.name}</h1>
                <p className={styles["rocket-details__description"]}>{rocketMock?.description}</p>

                <h2 className={styles["rocket-details__subtitle"]}>About</h2>
                <AboutCards rocketDetail={rocketMock} />

                <h2 className={styles["rocket-details__subtitle"]}>Technical Sheet</h2>
                <TechnicalSheetList />
            </section>
        </main>
    )
};

export default RocketDetailPage;
