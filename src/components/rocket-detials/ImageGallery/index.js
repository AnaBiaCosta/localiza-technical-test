import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ images, rocketName }) => (
    <ImageList
        cols={2} rowHeight={500}
    >
        {images.map((image) => (
            <ImageListItem
                key={image}
            >
                <Image
                    fill
                    src={image}
                    alt={`Image of ${rocketName}`}
                    // width={600}
                    // height={300}
                />
            </ImageListItem>
        ))}
    </ImageList>
)

export { ImageGallery }
