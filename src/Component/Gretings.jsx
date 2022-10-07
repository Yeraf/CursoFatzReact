function Greting({ title, name = "User" }) {
  console.log(title, name);

  return (
    <div>
      <h1>
        {title}, dice {name}
      </h1>
    </div>
  );
}

export default Greting;

export function UserCard({ name, amount, marriedd, adress, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <h3>{marriedd ? "esta casada" : "no esta casada"}</h3>
      <ul>
        <li>City: {adress.city}</li>
        <li>Street: {adress.street}</li>
      </ul>
    </div>
  );
}



