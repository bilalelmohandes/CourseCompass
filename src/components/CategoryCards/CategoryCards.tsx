import React from "react";
import { Card, Row, Col } from "antd";
import { courses, Course, Category } from "../../data";
import "devicon/devicon.min.css";
import "./CategoryCards.css";

const CategoryCards: React.FC = () => {
  // Extract unique categories from all courses
  const allCategories = courses.reduce((acc: Category[], course: Course) => {
    course.categories.forEach((category) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
    });
    return acc;
  }, []);

  // Function to map category names to Devicon classes
  const getCategoryIconClass = (category: Category): string => {
    const iconMap: { [key in Category]?: string } = {
      "Web Development": "devicon-html5-plain colored",
      "Programming Languages & Software Engineering":
        "devicon-javascript-plain colored",
      "Data Science & Analytics": "devicon-pandas-original colored",
      "Artificial Intelligence & Machine Learning":
        "devicon-tensorflow-original colored",
      "Cloud Computing & DevOps": "devicon-amazonwebservices-original colored",
      "Cybersecurity & Networking": "devicon-ssh-original-wordmark",
      "Mobile App Development": "devicon-android-plain colored",
      "Databases & Big Data": "devicon-mongodb-plain colored",
      "Algorithms & Data Structures": "devicon-python-plain colored",
      "IT Fundamentals & Support": "devicon-linux-plain",
      "Software Architecture & Design Patterns": "devicon-docker-plain colored",
      "Specialized Computer Science Topics": "devicon-atom-original colored",
    };
    return iconMap[category] || "devicon-devicon-plain"; // Default icon
  };

  return (
    <div className="category-cards">
      <h2>Browse by Category</h2>
      <Row gutter={[16, 16]}>
        {allCategories.map((category, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              className="category-card"
              onClick={() => console.log(`Clicked on ${category}`)}
            >
              <i
                className={`category-icon ${getCategoryIconClass(category)}`}
              ></i>
              <h3>{category}</h3>
              <p>
                {
                  courses.filter((course) =>
                    course.categories.includes(category)
                  ).length
                }{" "}
                courses
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryCards;
