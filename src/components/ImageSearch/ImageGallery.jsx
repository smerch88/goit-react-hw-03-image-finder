import { ImageGalleryItem } from './ImageGalleryItem';
import style from './styles/ImageGallery.module.css';
import { Modal } from './Modal';
import { useState } from 'react';
import { Loader } from './Loader';

export const ImageGallery = ({ images, isLoad }) => {
  const [clikedImageId, setClikedImageId] = useState(0);

  const onClickHandler = event => {
    setClikedImageId(Number(event.target.dataset.id));
  };

  const onClose = event => {
    if (event?.target === event?.currentTarget) {
      setClikedImageId(0);
    }
  };

  const closeModalOnEsc = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <>
      <ul className={style.ImageGallery} onClick={onClickHandler}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            dataid={image.id}
            alt={image.tags}
          />
        ))}
      </ul>
      {isLoad && <Loader size={50} />}
      {clikedImageId !== 0 ? (
        <Modal
          src={images.filter(image => image.id === clikedImageId)}
          onClose={onClose}
          closeModalOnEsc={closeModalOnEsc}
        />
      ) : (
        ''
      )}
    </>
  );
};
