import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="about-us">About Use</Link>
        <Link to="facts">Facts</Link>
      </div>
    </div>
  );
};

export default Home;
