import { H1, ProfilePic } from "../css/styles";
import harry from "../img/harry-potter.jpg";

const Home = () => {
  return (
    <div>
      <H1>Harry Potter</H1>
      <ProfilePic src={harry} alt="Harry Potter" />
    </div>
  );
};

export default Home;
