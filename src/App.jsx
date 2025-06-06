import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset,incrementByAmount } from './redux/features/counter/counter';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }
  function handleIncrementByAmt() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input type="number"
      value={amount}
      placeholder='Enter Amount'
      onChange={(e)=>setAmount(e.target.value)}
      />
      <button onClick={handleIncrementByAmt}>Inc By Ammount</button>
    </>
  )
}

export default App
