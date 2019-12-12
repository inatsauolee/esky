package com.esky.serviceImpl;

import com.esky.model.entities.Course;
import com.esky.model.pojo.CourseRequest;
import com.esky.repository.CourseRepository;
import com.esky.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service("folderService")
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course createCourse(CourseRequest folderRequest) {
//        Folder folder = null;
//        if (folderRequest.getParentId() != null)
//            folder = folderRepository.findById(folderRequest.getParentId()).get();
//        if (folder != null) {
//            List<Folder> folders = folderRepository.findByParentAndName(folder, folderRequest.getName());
//            if (!folders.isEmpty())
//                throw new ResourceConflictException(folder.getId(), "folder already present in the same folder");
//        }
//        Folder newfolder = new Folder(folderRequest);
//        Folder savedFolder = folderRepository.save(newfolder);
//        return folderRepository.findById(savedFolder.getId()).get();
        return null;
    }

    @Override
    public List<CourseRequest> findAllActiveCourses() {
        List<Course> courses = courseRepository.findAll();
        return CourseRequest.buildRequest(courses);
    }
}
