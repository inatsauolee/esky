package com.esky.serviceImpl;

import com.esky.model.entities.Course;
import com.esky.model.pojo.CourseRequest;
import com.esky.repository.CourseRepository;
import com.esky.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service("courseService")
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    //Save Course:
    @Override
    public Course saveCourse(CourseRequest courseRequest) {
        Course course = CourseRequest.buildCourse(courseRequest);
        return courseRepository.save(course);
    }

    //Update Course:
    @Override
    public Course updateCourse(CourseRequest courseRequest) {
        Course course = CourseRequest.buildCourse(courseRequest);
        return courseRepository.save(course);
    }

    //Delete Course:
    @Override
    public void deleteCourse(CourseRequest courseRequest) {
        Course course = CourseRequest.buildCourse(courseRequest);
        courseRepository.delete(course);
    }

    //Delete Course by ID:
    @Override
    public void deleteCourseById(Long id) {
        courseRepository.deleteById(id);
    }

    //Get Course by ID:
    @Override
    public Course getCourseById(Long id) {
        Optional<Course> op = courseRepository.findById(id);
        if(op.isPresent()) return op.get();
        return null;
    }

    //Get Course by Creator:
    @Override
    public Page<Course> getCourseByCreator(Pageable pageable, Long id) {
        return courseRepository.findByCreator(pageable, id);
    }

    //Get all Courses by Filter:
    @Override
    public Page<Course> findAllCourseByFilter(Pageable pageable, String filterValue) {
        return courseRepository.findByNameIgnoreCaseContainingOrSubjectIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(pageable, filterValue, filterValue, filterValue);
    }

    //Find all Courses:
    @Override
    public Page<Course> findAllCourse(PageRequest pageRequest){
        return courseRepository.findAll(pageRequest);
    }

    //Get Courses Count:
    @Override
    public long getCoursesCount() {
        return courseRepository.count();
    }
}
