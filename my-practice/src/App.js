import './App.css';
import React, {useState} from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("blue")
  const [style, setStyle] = useState("cont")
  const [items, setItems] = useState([])
  const [userInput, setUserInput] = useState('')


const addItem = item => {
  console.log(item)
  const newItems = [...items, item];
  setItems(newItems);
  console.log(items)
}

  const handleSubmit = e =>{
    e.preventDefault();
    addItem(userInput);
    setUserInput("")
  }

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
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <span className={style}>{theme}</span>
        <button onClick={increment}>+</button>
      </div>
      <br/>
      <div className="list">

        <form onSubmit={handleSubmit}>
          <label>Enter Your Item
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </label>
          <input type="submit"/>
          <br></br>
          {userInput}
        </form>
        <div>
          <h4>Your Items:</h4>
          {items.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
      );
      }

export default App;
