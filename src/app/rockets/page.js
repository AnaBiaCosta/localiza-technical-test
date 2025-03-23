import styles from './styles.module.scss';

import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";

import CachedDB from "@/utils/db";

import { RocketsList } from '@/components/rockets/RocketsList';

const RocketsPage = async () => {
  const page = 1;
  const limit = 10;

  await CachedDB.initializeDB();
  const queryClient = new QueryClient();

  const rocketsData = CachedDB.getPaginatedRockets(page, limit);

  queryClient.setQueryData(["rockets", page, limit], rocketsData);

  const initialData = dehydrate(queryClient);

  return (
    <HydrationBoundary state={initialData}>
          <main className={styles.rockets}>
            <div >
              <h1 className={styles.rockets__title}>Rockets</h1>

              <RocketsList />
            </div>
        </main>
    </HydrationBoundary>
  )
}

export default RocketsPage;
