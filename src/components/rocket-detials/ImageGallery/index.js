'use client';

import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ImageGallery = ({ images, rocketName }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ImageList cols={isMobile ? 1 : 2 } rowHeight={500}>
            {images.map((image) => (
                <ImageListItem
                    key={image}
                >
                    <Image
                        fill
                        src={image}
                        alt={`${rocketName} rocket`}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export { ImageGallery }
