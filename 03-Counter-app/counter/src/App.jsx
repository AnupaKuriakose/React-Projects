import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [liked, setLiked] = useState(true);
  const handleClick = (event) => {
    if (event.target.name === "increment") {
      setCount(count + 1);
    } else if (event.target.name === "decrement") {
      setCount(count - 1);
    }
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleChange = (event) => {
    setLiked(event.target.checked);
  }
  return (
    <div className="container">
      <header>
        <h1> Counter</h1>
      </header>
      <main>
        <div className="counter">{count}</div>
        <div>
          <button className="incBtn" name="increment" onClick={handleClick}>
            Increment
          </button>
          <button className="decBtn" name="decrement" onClick={handleClick}>
            Decrement
          </button>
        </div>
        {/* Text box example*/}
        <div className="container">
          <input
          className ="blockItem"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeHolder="Type here..."
          />
          <span className ="blockItem">You typed: {text}</span>
          <button
            onClick={() => {
              setText("");
            }}
          >
            Reset
          </button>
        </div>
          {/* checkbox example*/}
        <div className="container">
          <label>
          <input
            type="checkbox"
            checked={liked}
            onChange={handleChange}
          />I liked this
          <p> You {liked ?  'liked': 'did not like'} this!!!</p>
        </label>
        </div>
      </main>
    </div>
  );
}

export default App;
