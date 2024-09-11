import React from "react";
import { Card, Row, Col } from "antd";
import { courses, Course } from "../../data";
import "devicon/devicon.min.css";
import "./CategoryCards.css";

const CategoryCards: React.FC = () => {
  // Extract unique categories from all courses
  const allCategories = courses.reduce((acc: string[], course: Course) => {
    course.categories.forEach((category) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
    });
    return acc;
  }, []);

  // Function to map category names to Devicon classes
  const getCategoryIconClass = (category: string): string => {
    const iconMap: { [key: string]: string } = {
      React: "devicon-react-original colored",
      Python: "devicon-python-plain colored",
      JavaScript: "devicon-javascript-plain colored",
      "Web Development": "devicon-html5-plain colored",
      "Machine Learning": "devicon-tensorflow-original colored",
      "Data Science": "devicon-pandas-original colored",
      "Cloud Computing": "devicon-amazonwebservices-original colored",
      "Mobile Development": "devicon-android-plain colored",
      Cybersecurity: "devicon-ssh-original-wordmark",
      Database: "devicon-mongodb-plain colored",
      // Add more mappings as needed
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
