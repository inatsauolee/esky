package com.esky.service;

import com.esky.model.entities.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface CourseService {

    //Save Course:
    public Course saveCourse(Course course);

    //Update Course:
    public Course updateCourse(Course course);

    //Delete Course:
    public void deleteCourse(Course course);

    //Delete Course by ID:
    public void deleteCourseById(Long id);

    //Get Course by ID:
    public Course getCourseById(Long id);

    //Get Course by Creator:
    public Page<Course> getCourseByCreator(Pageable pageable, Long id);

    //Get all Courses by Filter:
    public Page<Course> findAllCourseByFilter(Pageable pageable, String filterValue);

    //Find all Courses:
    public Page<Course> findAllCourse(PageRequest pageRequest);

    //Get Courses Count
    public long getCoursesCount();

}