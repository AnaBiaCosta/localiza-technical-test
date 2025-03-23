import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ images, rocketName }) => (
    <ImageList
        cols={3} rowHeight={200}
    >
        {images.map((image) => (
            <ImageListItem
                key={image}
            >
                <Image
                    src={image}
                    alt={`Image of ${rocketName}`}
                    width={400}
                    height={200}
                />
            </ImageListItem>
        ))}
    </ImageList>
)

export { ImageGallery }
