import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import style from './styles/ImageGallery.module.css';
import { Modal } from './Modal';
import { Loader } from './Loader';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ).isRequired,
    isLoad: PropTypes.bool.isRequired,
  };

  state = {
    clickedImageId: 0,
  };

  onClickHandler = event => {
    this.setState({ clickedImageId: Number(event.target.dataset.id) });
  };

  onClose = event => {
    if (event?.target === event?.currentTarget) {
      this.setState({ clickedImageId: 0 });
    }
  };

  closeModalOnEsc = event => {
    if (event.key === 'Escape') {
      this.onClose();
    }
  };

  render() {
    const { images, isLoad } = this.props;
    const { clickedImageId } = this.state;

    return (
      <>
        <ul className={style.ImageGallery} onClick={this.onClickHandler}>
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
        {clickedImageId !== 0 ? (
          <Modal
            src={images.filter(image => image.id === clickedImageId)}
            onClose={this.onClose}
            closeModalOnEsc={this.closeModalOnEsc}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoad: PropTypes.bool.isRequired,
};
