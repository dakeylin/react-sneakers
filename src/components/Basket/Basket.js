import BasketCard from "../BasketCard/BasketCard";
import ColorButtons from "../ColorButtons/ColorButtons";
import styles from "./Basket.module.scss";

export default function Basket({ onCloseCart, cartBasket }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles["drawer-container"]}>
          <div className={styles["basket-title"]}>
            <h2>Корзина</h2>
            <img
              onClick={onCloseCart}
              className="basket-btn"
              width={32}
              height={32}
              src="\img\basket-btn.svg"
              alt=""
            />
          </div>

          <div className={styles.cartItem}>
            {cartBasket.length ? (
              cartBasket.map((obj) => (
              <BasketCard
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              
              />
              ))
            ) : (
              <p>Что то пошло не так</p>
            )}
          </div>
          <div className={styles.cartPrice}>
            <div className={styles["cartPriceItem"]}>
              <p>Итого:</p>
              <div className={styles["cartPrice-border"]} />
              <b>21 498 руб.</b>
            </div>
            <div className={styles["cartPriceItem"]}>
              <p>Налог 5%:</p>
              <div className={styles["cartPrice-border"]} />
              <b>1074 руб.</b>
            </div>
            <div>
              <ColorButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
