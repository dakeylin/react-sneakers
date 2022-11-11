import styles from "./Header.module.scss"

export default function Header(props) {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img width={40} height={40} src="\img\logo.png" />
        <div className="styles.headerLeft--info">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className={styles.headerRight}>
        <ul>
          <li onClick={props.onClickCart} >
            <img width={18} height={18} src="\img\cant.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="\img\favorite.svg" />
          </li>
          <li>
            <img width={18} height={18} src="\img\user.svg" />
          </li>
        </ul>
      </div>
    </header>
  );
};
