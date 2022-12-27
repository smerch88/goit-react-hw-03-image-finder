import { Component } from 'react';
import styles from './styles/Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.closeModalOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeModalOnEsc);
  }

  render() {
    const { src, onClose } = this.props;
    const [{ largeImageURL }] = src;
    const [{ tags }] = src;

    return (
      <div className={styles.Overlay} onClick={onClose}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={tags} loading="lazy" />
        </div>
      </div>
    );
  }
}
