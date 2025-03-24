import Image from 'next/image';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';

const Loading = () => (
    <div className={styles.loading}>
        <Image src="loading.svg" alt="loading" width={700} height={300} />
         <Typography  variant="body2" color="text.secondary">
            Loading...
        </Typography>
    </div>
)

export { Loading }
