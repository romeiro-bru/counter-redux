import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="counter">
      <button onClick={increment}>+</button>
      <span>{counter}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
