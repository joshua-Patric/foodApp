import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider.js";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const CartIsShownHandler = () => {
    setCartIsShown(true);
  };

  const CartIsCloseHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={CartIsShownHandler} />
      {cartIsShown && <Cart onHideCart={CartIsCloseHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
