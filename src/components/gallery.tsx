import React from 'react';
import ImageGallery from 'react-image-gallery';

interface Props {
  gallery: Array<string>;
}

const Gallery: React.FC<Props> = ({ gallery }) => {
  const items = gallery.map(el => ({
    original: el,
    thumbnail: el,
  }));

  return (
    <div className="image-gallery-wrapper">
      <ImageGallery
        items={items}
        thumbnailPosition="left"
        showFullscreenButton={false}
      />
    </div>
  );
};

export default Gallery;
