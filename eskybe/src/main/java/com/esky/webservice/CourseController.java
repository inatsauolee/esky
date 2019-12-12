package com.esky.webservice;

import com.esky.model.entities.Course;
import com.esky.model.pojo.CourseRequest;
import com.esky.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/folder", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourseController {

    @Autowired
    private CourseService courseService;

//    @RequestMapping(method = POST, value = "/update")
//    public void updateFolder(@RequestBody FolderRequest folderRequest, UriComponentsBuilder ucBuilder) {
//        courseService.updateFolder(folderRequest);
//    }

    @RequestMapping(method = POST, value = "/create")
    public ResponseEntity<?> creatFolder(@RequestBody CourseRequest courseRequest, UriComponentsBuilder ucBuilder) {
        Course course = courseService.createCourse(courseRequest);
        return new ResponseEntity<>(course, HttpStatus.CREATED);
    }

//    @Transactional
//    @RequestMapping(method = POST, value = "/delete")
//    public void deleteFolder(@RequestBody FolderRequest folderRequest, UriComponentsBuilder ucBuilder) {
//        courseService.delete(folderRequest);
//    }
//
//    @RequestMapping(method = GET, value = "/getAllFolderByUser/{userId}")
//    public List<FolderRequest> getAllFolderByUser(@PathVariable Long userId) {
//        List<FolderRequest> folders = courseService.findByCreator(userId);
//        return folders;
//    }
//
//    @RequestMapping(method = GET, value = "/getByUser/{userId}")
//    public List<FolderRequest> findByUser(@PathVariable Long userId) {
//        List<FolderRequest> folders = courseService.findDirectFolderByUser(userId);
//        return folders;
//    }
//
//    @RequestMapping(method = GET, value = "/getByFolder/{folderId}")
//    public List<FolderRequest> findByFolderParent(@PathVariable Long folderID) {
//        List<FolderRequest> folders = courseService.findByParent(folderID);
//        return folders;
//    }

}
