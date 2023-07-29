import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";


const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showcounter = useSelector((state) => state.counter.showcounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {

    dispatch(counterActions.toggle());
  
  };

  const incrementhandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementhandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
 
      {showcounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementhandler}>increment</button>
      <button onClick={decrementhandler}>decrement</button>
    </main>
  );
};

export default Counter;
