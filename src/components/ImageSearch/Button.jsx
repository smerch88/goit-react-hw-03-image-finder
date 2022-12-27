import style from './styles/Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={style.Button} onClick={onClick}>
      Load more
    </button>
  );
};
