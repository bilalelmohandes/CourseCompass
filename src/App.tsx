import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import HomePage from "./pages/HomePage/Homepage";
import CoursePage from "./pages/Coursepage";
import "./App.css";
import "devicon/devicon.min.css";

const { Header, Content, Footer } = Layout;

const Logo = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22" cy="22" r="21" stroke="white" strokeWidth="2" />
    <path
      d="M22 12 L25 22 L22 32 L19 22 Z"
      fill="#61dafb"
      transform="rotate(45, 22, 22)"
    />
    <text x="22" y="7" textAnchor="middle" fill="white" fontSize="6">
      N
    </text>
    <text x="22" y="39" textAnchor="middle" fill="white" fontSize="6">
      S
    </text>
    <text x="39" y="23" textAnchor="middle" fill="white" fontSize="6">
      E
    </text>
    <text x="5" y="23" textAnchor="middle" fill="white" fontSize="6">
      W
    </text>
  </svg>
);

const NavigationMenu = () => {
  const location = useLocation();

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/courses">
        <Link to="/courses">Courses</Link>
      </Menu.Item>
    </Menu>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header className="header">
          <div className="logo-container">
            <Logo />
            <span className="app-name">CourseCompass</span>
          </div>
          <NavigationMenu />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursePage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>CourseCompass ©2024</Footer>
      </Layout>
    </Router>
  );
};

export default App;
