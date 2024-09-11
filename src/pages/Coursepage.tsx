// src/pages/CoursePage.tsx
import React from "react";
import { Card, Row, Col, Tag, Avatar, Progress, Tooltip } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { courses, Course } from "../data";
import { format } from "date-fns"; // For date formatting

const CoursePage: React.FC = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Available Courses</h2>
      <Row gutter={[24, 24]} justify="center">
        {courses.map((course: Course) => {
          // Calculate percentage of recommendations
          const totalVotes = course.recommendCount + course.doNotRecommendCount;
          const recommendPercentage =
            totalVotes > 0 ? (course.recommendCount / totalVotes) * 100 : 0;

          return (
            <Col xs={24} sm={12} md={8} lg={6} key={course.id}>
              <Card
                title={course.title}
                bordered={false}
                cover={
                  <img
                    alt={course.title}
                    src={course.thumbnail}
                    style={{ height: "140px", objectFit: "cover" }} // Slightly larger thumbnail
                  />
                }
                style={{ height: "400px", overflow: "visible" }} // Slightly larger card
              >
                <div style={{ marginBottom: "10px" }}>
                  <Avatar size="small" style={{ backgroundColor: "#87d068" }}>
                    {course.instructor[0]}
                  </Avatar>
                  <span style={{ marginLeft: "8px", fontSize: "0.9em" }}>
                    {course.instructor}
                  </span>
                </div>
                <p style={{ fontSize: "0.9em", marginBottom: "10px" }}>
                  {course.description}
                </p>
                <div style={{ marginBottom: "10px" }}>
                  {course.categories.map((category) => (
                    <Tag
                      color="blue"
                      key={category}
                      style={{ fontSize: "0.8em" }}
                    >
                      {category}
                    </Tag>
                  ))}
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Tooltip title="Recommend">
                    <LikeOutlined
                      style={{
                        color: "green",
                        marginRight: "8px",
                        fontSize: "1.1em",
                      }}
                    />
                  </Tooltip>
                  <Progress
                    percent={Math.round(recommendPercentage)}
                    size="small"
                    status={recommendPercentage > 50 ? "active" : "exception"}
                    strokeColor={recommendPercentage > 50 ? "green" : "red"}
                    showInfo={false}
                    style={{ width: "65%", marginRight: "8px" }}
                  />
                  <Tooltip title="Do Not Recommend">
                    <DislikeOutlined
                      style={{ color: "red", fontSize: "1.1em" }}
                    />
                  </Tooltip>
                </div>
                <div
                  style={{
                    fontSize: "0.8em",
                    color: "#888",
                    marginBottom: "30px",
                  }}
                >
                  <strong>Uploaded on: </strong>
                  {format(new Date(course.uploadDate), "MMMM dd, yyyy")}
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CoursePage;
