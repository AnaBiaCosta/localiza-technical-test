import styles from './styles.module.scss';
import Image from 'next/image';

import CircularProgress from '@mui/material/CircularProgress';
import { AboutCards } from '@/components/rocket-detials/AboutCards';
import { ImageGallery } from '@/components/rocket-detials/ImageGallery';

import RocketApiService from '@/services/RocketApiService';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const rockets = await RocketApiService.fetchRockets();
  
  const paths = rockets.map((rocket) => ({
    params: { id: rocket.id },
  }));

  return paths;
};

const RocketDetailPage = async ({ params }) => {
    const { rocket_id } = await params;

    const rocketData = await RocketApiService.fetchRocketDetails(rocket_id);

    if (!rocketData) {
      return <CircularProgress />;
    }

    return (
        <main className={styles["rocket-details"]}>
            <Image
              className={styles["rocket-details__image-wrapper"]}
                src={rocketData?.flickr_images[0]}
                width={500}
                height={500}
                alt={`${rocketData?.name} rocket`}
            />

            <section style={{ maxWidth: '1378px' }}>
                <h1 className={styles["rocket-details__title"]}>{rocketData?.name}</h1>
                <p className={styles["rocket-details__description"]}>{rocketData?.description}</p>

                <h2 className={styles["rocket-details__subtitle"]}>About</h2>
                <AboutCards rocketDetail={rocketData} />

                <h2 className={styles["rocket-details__subtitle"]}>Images</h2>
                <ImageGallery images={rocketData?.flickr_images} rocketName={rocketData?.name} />
            </section>
        </main>
    )
};

export default RocketDetailPage;
