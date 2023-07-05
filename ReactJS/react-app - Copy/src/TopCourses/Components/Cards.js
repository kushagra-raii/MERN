import React from 'react';
import Card from './Card';

const Cards = ({ courses }) => {

    const getCourse = () => {

        let allCourses = [];
        if (courses !== null) {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            });
        }


        return allCourses;
    };
      
    return (

        <div>
            {getCourse().map((course) => {
                return <Card key={course.id} course={course} />;
            })}
        </div>
    );
};

export default Cards;
