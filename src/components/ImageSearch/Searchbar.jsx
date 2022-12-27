import { useState } from 'react';
import style from './styles/Searchbar.module.css';

export const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}></span>
          </button>
          <input
            className={style.SearchFormInput}
            type="text"
            value={inputValue}
            autoFocus
            placeholder="Search Images and Photos"
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />
        </form>
      </header>
    </>
  );
};
