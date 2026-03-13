
import HotelBlock from "./HotelBlock";
async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}


export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div> Hotel details</div>
      <div>
        {data.map((item) => (
          <HotelBlock key={item.id} name={item.name} id ={item.id} capacity={item.capacity}/>
        ))}
      </div>
    </main>
  );
}
