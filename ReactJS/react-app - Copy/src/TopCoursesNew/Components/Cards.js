import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    const getCourse = () => {

        let allCourses = [];
        // console.log(courses);

           
                Object.values(courses).forEach((courseCategory) => {
                    courseCategory.forEach((course) => {
                        allCourses.push(course);
                    })
                }); 
            
    
        return allCourses;
    };
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {getCourse().map((course) => {
                return <Card key={course.id} course={course} />;
            })}
    </div>
  )
}

export default Cards