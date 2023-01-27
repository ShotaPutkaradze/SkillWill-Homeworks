import { Link, Outlet } from "react-router-dom";
import { Content, Header } from "../css/styles";

const MainPage = () => {
  return (
    <Content>
      <Header>
        <Link to="/">Home</Link>
        <Link to="about-us">About</Link>
        <Link to="facts">facts</Link>
      </Header>

      <Outlet />
    </Content>
  );
};

export default MainPage;
