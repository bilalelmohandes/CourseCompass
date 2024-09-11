import React from "react";
import { Typography } from "antd";
import CourseSearch from "../../components/CourseSearch/CourseSearch";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import "./Homepage.css";

const { Title } = Typography;

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Title level={1}>Welcome to CourseCompass</Title>
      <CourseSearch />
      <CategoryCards />
    </div>
  );
};

export default HomePage;
