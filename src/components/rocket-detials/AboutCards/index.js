import styles from './styles.module.scss';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CARDS, CARD_TITLE } from '@/constants/cards.constants';
import { CARD_ICONS } from '@/utils/icons';
import { formatByKey } from '@/utils/formatByKey';

const AboutCards = ({ rocketDetail }) => (
    <section className={styles['about-cards']}>
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                gap: 2,
            }}
        >
            {CARDS.map((key) => (
                <Card key={key}>
                    <CardContent sx={{ height: '100%' }}>
                    <Typography variant="h5" component="h5" className={styles['about-cards__card-title']}>
                        {CARD_ICONS[key]}
                        {CARD_TITLE[key]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {formatByKey(rocketDetail[key], key)}
                    </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    </section>
);

export { AboutCards };
