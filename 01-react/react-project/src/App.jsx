import "./App.css";
import chef from "./images/chef.jpg";
import { useState } from "react";

function Header({ name, year }) {
  return (
    <header>
      <h1>Eve's kitchen ({name})</h1>
      <h2>We deliver delicious food</h2>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Mac & Cheese",
  "Salmon with Potatos",
  "Tofu with vegetables",
  "Veg soup",
];
const dishObjects = items.map((item, i) => ({
  id: i,
  title: item,
}));
function Main({ dishes, currentStatus, onStatus }) {
  return (
    <>
      <h2>Welcome to this beautiful restaurant!! {currentStatus? "Open": "Closed"}</h2>
      <button  style={{ border: "2px solid black" }} onClick={()=> onStatus(true)}>I want to be open</button>
      <main>
        <img src={chef} height={200} alt="An image of Eve the chef" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
function App() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <h2>The restaurent is currently {status ? "open" : "closed"}.</h2>
      <button
        style={{ border: "2px solid black" }}
        onClick={() => setStatus(!status)}
      >
        {status ? "Close" : "Open"} restaurant
      </button>
      <Header name="Veg & Non-Veg" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} currentStatus={status} onStatus={setStatus}/>
    </>
  );
}

export default App;
