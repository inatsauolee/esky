package com.esky.webservice;

import com.esky.model.entities.Course;
import com.esky.model.pojo.CourseRequest;
import com.esky.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/course", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/save")
    public ResponseEntity saveCourse(@RequestBody CourseRequest courseRequest) {
        return new ResponseEntity(courseService.saveCourse(courseRequest), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateCourse(@PathVariable Long id, @RequestBody CourseRequest courseRequest) {
        return new ResponseEntity(courseService.saveCourse(courseRequest), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCourse(@PathVariable Long id) {
        if (null == courseService.getCourseById(id)) {
            return new ResponseEntity("No Course found for ID " + id, HttpStatus.NOT_FOUND);
        }
        courseService.deleteCourseById(id);
        return new ResponseEntity("Course "+ id +" deleted !", HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getCourseById(@PathVariable Long id) {
        Course aCourse = courseService.getCourseById(id);
        if (aCourse == null) {
            return new ResponseEntity("No Course found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(aCourse, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public List<CourseRequest> allCourses(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Course> pages = courseService.findAllCourse(pageRequest);
        return CourseRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/creator/{id}")
    public List<CourseRequest> allCoursesByCreator(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Course> pages = courseService.findAllCourseByCreator(pageRequest, filterValue, id);
        return CourseRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/student/{id}")
    public List<CourseRequest> allCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Course> pages = courseService.findByStudentAndFilter(pageRequest, filterValue, id);
        return CourseRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/mine/creator/{id}")
    public List<CourseRequest> myCoursesByCreator(@PathVariable Long id) {
        return courseService.findMyCourseByCreator(id);
    }

    @GetMapping("/mine/student/{id}")
    public List<CourseRequest> myCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Course> pages = courseService.findByStudentAndFilter(pageRequest, filterValue, id);
        return CourseRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public List<CourseRequest> allCoursesByFilter(int page, int size, Sort.Direction direction, String sort, String filterValue) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Course> pages = courseService.findAllCourseByFilter(pageRequest, filterValue);
        return CourseRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/creator/count/{id}")
    public ResponseEntity getCoursesCountByCreator(@PathVariable Long id) {
        return new ResponseEntity(courseService.getCoursesCountByCreator(id), HttpStatus.OK);
    }

    @GetMapping("/student/count/{id}")
    public ResponseEntity getCoursesCountByStudent(@PathVariable Long id) {
        return new ResponseEntity(courseService.getCoursesCountByStudent(id), HttpStatus.OK);
    }

    @GetMapping("/all/count")
    public ResponseEntity getCoursesCount() {
        return new ResponseEntity(courseService.getCoursesCount(), HttpStatus.OK);
    }

}
