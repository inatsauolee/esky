package com.esky.serviceImpl;

import com.esky.model.entities.Course;
import com.esky.model.entities.User;
import com.esky.model.pojo.CourseRequest;
import com.esky.repository.CourseRepository;
import com.esky.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
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
        if (op.isPresent()) return op.get();
        return null;
    }

    //Get all Courses by Student + Filter:
    @Override
    public Page<Course> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long id) {
        return courseRepository.findByStudentAndFilter(pageRequest, id, '%' + filterValue + '%');
    }

    //Get all Courses by Creator + Filter:
    @Override
    public Page<Course> findAllCourseByCreator(PageRequest pageRequest, String filterValue, Long id) {
        if ("".equals(filterValue)) {
            return courseRepository.findByCreatorId(pageRequest, id);
        } else {
            return courseRepository.findByCreatorIdAndFilter(pageRequest, new User(id), '%' + filterValue + '%');
        }
    }

    //Get my Courses by Creator:
    @Override
    public List<CourseRequest> findMyCourseByCreator(Long id) {
        return CourseRequest.buildRequest(courseRepository.findMyCourseByCreator(new User(id)));
    }

    //Get all Courses by Filter:
    @Override
    public Page<Course> findAllCourseByFilter(PageRequest pageRequest, String filterValue) {
        return courseRepository.findAllByFilter(pageRequest, '%' + filterValue + '%');
    }

    //Find all Courses:
    @Override
    public Page<Course> findAllCourse(PageRequest pageRequest) {
        return courseRepository.findAll(pageRequest);
    }

    //Get Courses Count:
    @Override
    public long getCoursesCount() {
        return courseRepository.count();
    }
}
