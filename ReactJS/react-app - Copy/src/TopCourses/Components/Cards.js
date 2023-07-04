import React from 'react'
import Card from '../../PlanWithLove/Components/Card';

const Cards = ({ courses }) => {
    let allCourses = [];
    const getCourse = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;

    }
    return (
        <div>
            {getCourse().map( (course) => {
                <Card/>
            })}
        </div>
    )
}

export default Cards