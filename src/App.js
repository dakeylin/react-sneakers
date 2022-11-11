import React from "react";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  const [items, setitems] = React.useState([]);

  const [cartBasket, setCartBasket] = React.useState([]);

  const [basketOpened, setBasketOpened] = React.useState(false);

  const addCart = (id) => {
    let oneItems = items.find((item) => item.id == id);
    setCartBasket([...cartBasket, oneItems]);
  };

  React.useEffect(() => {
    fetch("https://63525048ffbb7da0f2d4d814.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setitems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {basketOpened && (
        <Basket
          onCloseCart={() => setBasketOpened(false)}
          cartBasket={cartBasket}
        />
      )}

      <Header onClickCart={() => setBasketOpened(true)} />

      <div className="content">
        <div className="container">
          <div className="search">
            <h1>Все кроссовки</h1>
            <div className="search-block">
              <img width={15} height={15} src="\img\dearch.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="content-list">
            {items.map((obj) => (
              <Card
                addCart={addCart}
                id={obj.id}
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
