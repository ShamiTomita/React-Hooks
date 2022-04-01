import './App.css';
import React, {useState} from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("blue")
  const [style, setStyle] = useState("cont")

  function changeStyle(cont){
    setStyle(cont)
}
  function increment(){
    setCount(prevCount => prevCount + 1)
    setTheme(prevTheme => "red")
    changeStyle("cont2")
  }

  function decrement(){
    setCount(prevCount => prevCount -1)
    setTheme(prevTheme => "blue")
    changeStyle("cont")
  }
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span className={style}>{theme}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
