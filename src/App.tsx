import { useEffect } from "react";
import { useDispatch } from "react-redux";
import cartItems from "./cartItems";
import CartContainer from "./components/CartContainer";
import { SelectModal } from "./components/SelectModal";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cart/CartSlice";
import { useAppSelector } from "./store";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
      <SelectModal />
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
