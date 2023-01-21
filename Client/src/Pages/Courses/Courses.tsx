import React, { useState } from 'react';
import CourseTitleNav from './CourseTitleNav/CourseTitleNav';
import CourseCard from './courseCard/CourseCard';
import cousedetails from './details'

type userData =  {
        id: number;
        category: string;
        title: string;
        lecture: number;
        people: number;
        image: string;
    }[]

const Courses = () => {
    const [courses, setCourses] = useState<userData>(cousedetails)
    const handleCourseCategory = (cata : string) =>{
        const filterCata = cousedetails.filter(CourseCatagory => {
            return CourseCatagory.category === cata
        })
        console.log(filterCata);
        setCourses(filterCata)
    }
    return (
        <div className='w-[90%] mx-auto mt-5'>
           <CourseTitleNav handleCourseCategory={handleCourseCategory} setCourses={setCourses}/>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
                {
                    courses.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>

        </div>
    );
};

export default Courses;