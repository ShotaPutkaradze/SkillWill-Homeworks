import { useParams, Link } from "react-router-dom";
import { Div, H1 } from "../css/styles";

const Facts = () => {
  const factId = [
    { id: "id1", book: "Philosopher's Stone (1997)" },
    { id: "id2", book: "Chamber of Secrets (1998)" },
    { id: "id3", book: "Prisoner of Azkaban (1999)" },
    { id: "id4", book: "Goblet of Fire (2000)" },
    { id: "id5", book: "Order of the Phoenix (2003)" },
    { id: "id6", book: "Half-Blood Prince (2005)" },
    { id: "id7", book: "Deathly Hallows (2007)" },
  ];

  let dinamycURL = useParams().factId;

  for (let fact of factId) {
    if (dinamycURL === fact.id) {
      return (
        <Div>
          <H1>
            {fact.book}
            <br></br>
          </H1>
        </Div>
      );
    }
  }

  return (
    <Div>
      <H1>Please see all Facts: </H1>
      {factId.map((fact) => (
        <Div key={fact.id}>
          <Link to={fact.id}>{fact.book}</Link>
          <br></br>
        </Div>
      ))}
    </Div>
  );
};

export default Facts;
