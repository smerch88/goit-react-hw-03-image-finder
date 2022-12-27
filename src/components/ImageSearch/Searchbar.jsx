import style from './styles/Searchbar.module.css';
import { Component } from 'react';

export class Form extends Component {
  state = {
    inputValue: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <header className={style.Searchbar}>
          <form onSubmit={this.handleSubmit} className={style.SearchForm}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormButtonLabel}></span>
            </button>
            <input
              className={style.SearchFormInput}
              type="text"
              value={this.state.inputValue}
              autoFocus
              placeholder="Search Images and Photos"
              onChange={event => {
                this.setState({ inputValue: event.target.value });
              }}
            />
          </form>
        </header>
      </>
    );
  }
}
