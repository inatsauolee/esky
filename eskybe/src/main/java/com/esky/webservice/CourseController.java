package com.esky.webservice;

import com.esky.model.entities.Course;
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
    public ResponseEntity saveCourse(@RequestBody Course course) {
        return new ResponseEntity(courseService.saveCourse(course), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateCourse(@PathVariable Long id, @RequestBody Course course) {
        Course update = courseService.getCourseById(id);
        if (null == update) {
            return new ResponseEntity("No Course found for ID " + id, HttpStatus.NOT_FOUND);
        }else {
            if(course.getDescription()!=null) update.setDescription(course.getDescription());
            if(course.getName()!=null) update.setName(course.getName());
            if(course.getSubject()!=null) update.setSubject(course.getSubject());
            if(course.getCreator()!=null) update.setCreator(course.getCreator());
            return new ResponseEntity(courseService.saveCourse(update), HttpStatus.OK);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getCourseById(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        if (course == null) {
            return new ResponseEntity("No Course found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(course, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public List<Course> allCourses(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Course> pages= courseService.findAllCourse(pageRequest);
        return pages.getContent();
    }

    @GetMapping("/all/filter")
    public List<Course> allCourses(Pageable pageable, String filterValue) {
        Page<Course> page= courseService.findAllCourseByFilter(pageable, filterValue);
        return page.getContent();
    }

    @GetMapping("/all/count")
    public ResponseEntity getCoursesCount() {
        return new ResponseEntity(courseService.getCoursesCount(), HttpStatus.OK);
    }


}
