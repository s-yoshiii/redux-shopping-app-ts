import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import { SelectModal } from "./components/SelectModal";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cart/CartSlice";
import { useAppSelector } from "./store";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
      {isOpen && <SelectModal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
