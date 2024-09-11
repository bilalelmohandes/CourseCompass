import React, { useState } from "react";
import { AutoComplete, Input, Card, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { courses, Course } from "../../data";
import "./CourseSearch.css";

const { Title } = Typography;

interface OptionType {
  value: string;
  label: React.ReactNode;
  course: Course;
}

const CourseSearch: React.FC = () => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const onSearch = (searchText: string): void => {
    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchText.toLowerCase()) ||
        course.categories.some((category) =>
          category.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const newOptions: OptionType[] = filteredCourses.map((course) => ({
      value: course.title,
      label: (
        <div>
          <div>{course.title}</div>
          <div style={{ fontSize: "12px", color: "#888" }}>
            {course.instructor}
          </div>
        </div>
      ),
      course: course,
    }));

    setOptions(newOptions);
  };

  const onSelect = (value: string, option: OptionType): void => {
    setSelectedCourse(option.course);
  };

  return (
    <div className="course-search">
      <Title level={2}>Find Your Next Course</Title>
      <AutoComplete<string, OptionType>
        options={options}
        onSearch={onSearch}
        onSelect={onSelect}
        className="search-bar"
      >
        <Input
          size="large"
          placeholder="Search for courses..."
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
      {selectedCourse && (
        <Card title={selectedCourse.title} className="course-card">
          <p>
            <strong>Instructor:</strong> {selectedCourse.instructor}
          </p>
          <p>
            <strong>Platform:</strong> {selectedCourse.platform}
          </p>
          <p>{selectedCourse.description}</p>
        </Card>
      )}
    </div>
  );
};

export default CourseSearch;
