import "./Counter.css";

function Counter({ count, onIncrement, onDecrements }) {
   return (
      <div className="App">
         <div className="card">
            <span style={{ "--i": 0 }}></span>;<span style={{ "--i": 1 }}></span>;
            <span style={{ "--i": 2 }}></span>;<span style={{ "--i": 3 }}></span>;
            <div className="glass">
               <h1>Counter {count}</h1>
               <div>
                  <button onClick={onIncrement()}>Increment</button>
                  <button onClick={onDecrements}>Decrement</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Counter;
