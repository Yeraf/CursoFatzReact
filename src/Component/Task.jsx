export function TaskCard({ready}) {

  const CardStyles = {
    background: "black",
    color: "violet",
    padding: "20px",
    margin: "20px",
  };

  const CardStylesTrue = {
    background: "red",
    color: "#000",
    padding: "20px",
    margin: "20px",
  };

  const trueo = true;

  return (
    <div style={ready ? CardStylesTrue : CardStyles}>
      <h1>{ready ? 'Tarea Lista' : 'Tarea pendiente'}</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
