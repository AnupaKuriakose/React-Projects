async function fetchData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await fetchData();
  return (
    <main>
      <h1>Lift status info</h1>
      <table>
        <thead>
          <tr>
            <th>Lift Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
