'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Loading = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={styles.loading}>
            <Image
                src="loading.svg"
                alt="loading"
                width={isMobile ? 250 : 700}
                height={ isMobile ? 100 : 300}
            />
            <Typography  variant="body2" color="text.secondary">
                Loading...
            </Typography>
        </div>
    )
}

export { Loading }
