import Counter from "./components/Couunter";

function App() {
   const [count, setCount] = usestate(0);

   const onIncrement = () => {
      if (count >= 0 && count < 10) {
         setCount(count++);
      }
   };
   const onDecrement = () => {
      if (count > 0) {
         setCount(count--);
      }
   };
   return (
      <div className="App">
         <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
   );
}

export default App;
