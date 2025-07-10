import { useState } from "react";
import "./App.css";
function App() {
   function isPrime(num) {
     for (let i = 2; i < num; i++) {
       if (num % i === 0) {
         return false;
       }
     }
     return num > 1;
   }
  const [count, setCount] =useState(0);
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" onClick={() => setCount(count - 1) } disabled={count === 0}>-1</button>
        <button data-testid="plusonebtn" onClick={() => setCount(count +1) }>+1</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setCount(0)}>Reset</button>
      </div>
      </div>
      <span data-testid="counter">{count}</span>
      <div>
        <span data-testid="odd-or-even">{count%2==0?"odd":"even"}</span>
        <span data-testid="is-prime">{isPrime(count)?" true":" false"}</span>
      </div>
    </div>
  );

}

export default App;

