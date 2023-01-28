import { Link, useParams } from "react-router-dom";
import { Div, H1 } from "../css/styles";

const Facts = () => {
  const factId = {
    id1: "Philosopher's Stone (1997)",
    id2: "Chamber of Secrets (1998)",
    id3: "Prisoner of Azkaban (1999)",
    id4: "Goblet of Fire (2000)",
    id5: "Order of the Phoenix (2003)",
    id6: "Half-Blood Prince (2005)",
    id7: "Deathly Hallows (2007)",
  };

  const factString = factId[useParams().factId];

  if (!factString)
    return (
      <div>
        <H1>Fact Not Found </H1>
        <H1>Please see all Facts: </H1>

        <Div>
          <Link to="id1">Philosopher's Stone (1997)</Link>
          <br></br>
          <Link to="id2">Chamber of Secrets (1998)</Link>
          <br></br>
          <Link to="id3">Prisoner of Azkaban (1999)</Link>
          <br></br>
          <Link to="id4">Goblet of Fire (2000)</Link>
          <br></br>
          <Link to="id5">Order of the Phoenix (2003)</Link>
          <br></br>
          <Link to="id1">Half-Blood Prince (2005)</Link>
          <br></br>
          <Link to="id6">Deathly Hallows (2007)</Link>
          <br></br>
          <Link to="id7">"Philosopher's Stone (1997)"</Link>
          <br></br>
        </Div>
      </div>
    );

  return (
    <div>
      <H1>{factString}</H1>
    </div>
  );
};

export default Facts;
