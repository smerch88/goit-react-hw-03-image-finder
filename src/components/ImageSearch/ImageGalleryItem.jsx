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
