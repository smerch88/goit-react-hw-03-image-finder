import React, { Component } from 'react';
import style from './ImageSearch.module.css';
import { fetchImages } from '../services/api';
import { Form } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export class ImageSearch extends Component {
  state = {
    submittedName: '',
    submittedNumber: 1,
    images: [],
    isLoad: false,
  };

  loadMore = () => {
    this.setState(prevState => ({
      submittedNumber: prevState.submittedNumber + 1,
    }));
  };

  handleSubmit = inputValue => {
    this.setState({ submittedName: inputValue, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.submittedName !== this.state.submittedName) {
      this.setState({ isLoad: true });
      this.setState({ submittedNumber: 1 });
      this.fetchData();
    }
    if (prevState.submittedNumber !== this.state.submittedNumber) {
      this.setState({ isLoad: true });
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { submittedName, submittedNumber } = this.state;
    const result = await fetchImages(submittedName, submittedNumber);
    this.setState(prevState => ({
      images: [...prevState.images, ...result.hits],
      isLoad: false,
    }));
  };

  render() {
    const { images, isLoad, submittedName } = this.state;

    return (
      <div className={style.App}>
        <Form onSubmit={this.handleSubmit} />
        <ImageGallery images={images} isLoad={isLoad} />
        {submittedName && !isLoad && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}
