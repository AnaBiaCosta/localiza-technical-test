import styles from './rocketCard.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';

const RocketCard = ({ rocket, onClick }) => (
  <Card sx={{ maxWidth: 432 }}>
    <CardMedia
      component="img"
      height="250"
      image={rocket?.flickr_images[0]}
      alt={`${rocket?.name} image`}
    />

  <CardContent>
    <div className={styles['rocket-card__title']}>
      <Typography variant="h6">
        {rocket?.name}
      </Typography>

      <Chip
        color={rocket?.active ? 'success' : 'default'}
        label={rocket?.active ? 'Active' : 'Inactive'}
        size="small"
      />
    </div>

    <Typography variant="body1">{rocket?.description}</Typography>
  </CardContent>

  <CardActions>
    <Button
      color="primary"
      size="small"
      // onClick={() => onClick(rocket.id)}
    >
      Learn more
    </Button>
  </CardActions>
</Card>
);

export { RocketCard };
