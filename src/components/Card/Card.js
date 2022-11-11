import React from "react";
import styles from "./Card.module.scss"

export default function Card({imageUrl, price, title, id,  addCart}) {

  const [liked, setLiked] = React.useState(false)

  const onClickFavorite = () => {
    setLiked(!liked)
  }

  const [status, setStatus] = React.useState(false)

  const handlerClick = () =>  {
    setStatus(!status)
    addCart(id)
  } 


  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
        onClick={onClickFavorite}
        src={liked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} 
        alt="Добавить в избранное" 
        />
      </div>
      <img
        width={133}
        height={112}
        src={imageUrl}
        alt="Nike Blazer Mid Suede"
      />
      <h5>{title}</h5>
      <div className={styles.card_bottom}>
        <div className={styles.price}>
          <p>Цена:</p>
          <span>{price} руб.</span>
        </div>
        <div className={styles.card_button}>
          <button>
            <img
              onClick={handlerClick}
              src={status ? "/img/btn-click.svg" : "/img/btn-plus.svg"}
              alt="Добавить в корзину"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
