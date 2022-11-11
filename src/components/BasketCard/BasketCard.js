import styles from "./BasketCard.module.scss"

export default function BasketCard ({imageUrl, price, title}) {

  return (
    <div className= {styles.basketContent}>
      <img
        className={styles['basket-img']}
        width={70}
        height={70}
        src={imageUrl}
        alt=""
      />
      <div>
        <span>{title}</span>
        <b>{price} руб.</b>
      </div>
      <img
        className={styles['basket-btn']}
        width={32}
        height={32}
        src="\img\basket-btn.svg"
        alt=""
      />
    </div>
  );
}
