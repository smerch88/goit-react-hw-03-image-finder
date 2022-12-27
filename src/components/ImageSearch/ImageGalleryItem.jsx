import PropTypes from 'prop-types';
import style from './styles/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, dataid, alt }) => {
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={style.ImageGalleryItemImage}
          data-id={dataid}
          loading="lazy"
        ></img>
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  dataid: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
