package com.esky.service;
import com.esky.model.entities.Course;
import com.esky.model.pojo.CourseRequest;

import java.util.List;

public interface CourseService {

//    void updateCourse(CourseRequest folderRequest);

    Course createCourse(CourseRequest folderRequest);

//    List<CourseRequest> findByCreator(Long userId);
//
//    List<CourseRequest> findByParent(Long folderID);
//
//    List<CourseRequest> findByUser(Long userId);
//
//    void delete(CourseRequest folderRequest);

    List<CourseRequest> findAllActiveCourses();

}