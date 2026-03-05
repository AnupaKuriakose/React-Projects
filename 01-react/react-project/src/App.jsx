import "./App.css";
import chef from "./images/chef.jpg";

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
function Main({ dishes }) {
  return (
    <>
      <h2>Welcome to this beautiful restaurant</h2>
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
  return (
    <>
      <Header name="Veg & Non-Veg" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </>
  );
}

export default App;
