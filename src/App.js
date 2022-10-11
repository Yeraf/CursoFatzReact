import "./App.css";
import Greting from "./Component/Gretings";
import { UserCard } from "./Component/Gretings";
import { Button } from "./Component/Button";
import { TaskCard } from "./Component/Task";
import { Post } from "./Component/Post";
import {Props} from "./Component/Props";

function App() {
  function sumar(x, y) {
    return x + y;
  }

  const married = true;
  const perro = false;
  const user = {
    name: "my name",
    lastname: "mi lastname",
  };
  const lluvia = true;

  return (
    <div className="App">

      <div> 
        <Props name="Pedro" lastname="Mora" age="18" location="NY"/>
      </div>

      <div>
        <Post/>
      </div>

      <div>
        <TaskCard ready={false} />
      </div>

      <div>
        <div>
          <Button text="Click me" />
          <Button text="Pay" />
          <Button text="Pay in Cash" name="Pool" />
        </div>
        <h1>{married ? "Esta casada" : "no esta casada"}</h1>
        <h2>{perro ? "usted tiene un perro 😀" : "usted no tiene perro 😌"}</h2>
        <h3>
          {"Mi name is: " + user.name + " and mi lastname is: " + user.lastname}
        </h3>
        <h4>{married.toString()}</h4>
        <h5>{sumar(10, 5)}</h5>
        <h6>{lluvia ? "Hoy si llovio" : "Hoy no llovio"}</h6>
      </div>
      <div>
        <Greting title="Hola React" name="Poll" />
        <Greting title="Hola JavaScript" name="Lakai" />
        <Greting title="Hola Angular" name="Nike" />
        <Greting title="Hola Vue" name="BMW" />
        <Greting title="Hola Yoku" />
      </div>
      <div>
        <Button text="Go to" />
        <UserCard
          name="Rayan"
          amount={3000}
          marriedd={true}
          points={[99, 33, 4]}
          adress={{ street: "123 Main Street", city: "New York" }}
          greet={function () {
            alert("Hello");
          }}
        />
      </div>
      <UserCard
        name="Joe Macmillan"
        amount={1000}
        married={false}
        points={[100, 20]}
        adress={{ street: "av some 123", city: "new york" }}
      />
    </div>
  );
}

export default App;
