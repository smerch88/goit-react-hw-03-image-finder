import style from './ImageSearch.module.css';

import { fetchImages } from '../services/api';
import { useState, useEffect } from 'react';
import { Form } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export const ImageSearch = () => {
  const [submittedName, setSubmittedName] = useState('');
  const [submittedNumber, setSubmittedNumber] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const loadMore = () => {
    setSubmittedNumber(submittedNumber + 1);
  };

  const handleSubmit = inputValue => {
    setSubmittedName(inputValue);
    setImages([]);
  };

  useEffect(() => {
    if (submittedName) {
      setIsLoad(true);
      async function fetchData() {
        const result = await fetchImages(submittedName, submittedNumber);
        setImages([...images, ...result.hits]);
        setIsLoad(false);
      }
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedNumber, submittedName]);

  return (
    <>
      <div className={style.App}>
        <Form onSubmit={handleSubmit} />
        <ImageGallery images={images} isLoad={isLoad} />
        {submittedName && !isLoad && <Button onClick={loadMore} />}
      </div>
    </>
  );
};
