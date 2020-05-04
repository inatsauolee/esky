package com.esky.webservice;

import com.esky.model.entities.Class;
import com.esky.model.pojo.ClassRequest;
import com.esky.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/class", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClassController {

    @Autowired
    private ClassService classService;

    @PostMapping("/save")
    public ResponseEntity saveClass(@RequestBody ClassRequest classRequest) {
        return new ResponseEntity(classService.saveClass(classRequest), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateClass(@PathVariable Long id, @RequestBody ClassRequest classRequest) {
        return new ResponseEntity(classService.saveClass(classRequest), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteClass(@PathVariable Long id) {
        if (null == classService.getClassById(id)) {
            return new ResponseEntity("No Class found for ID " + id, HttpStatus.NOT_FOUND);
        }
        classService.deleteClassById(id);
        return new ResponseEntity("Class "+ id +" deleted !", HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getClassById(@PathVariable Long id) {
        Class aClass = classService.getClassById(id);
        if (aClass == null) {
            return new ResponseEntity("No Class found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(aClass, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public List<ClassRequest> allClasses(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Class> pages = classService.findAllClass(pageRequest);
        return ClassRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/creator/{id}")
    public List<ClassRequest> allClassesByCreator(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Class> pages = classService.findAllClassByCreator(pageRequest, filterValue, id);
        return ClassRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/student/{id}")
    public List<ClassRequest> allCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Class> pages = classService.findByStudentAndFilter(pageRequest, filterValue, id);
        return ClassRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/mine/creator/{id}")
    public List<ClassRequest> myClassesByCreator(@PathVariable Long id) {
        return classService.findMyClassByCreator(id);
    }

    @GetMapping("/mine/student/{id}")
    public List<ClassRequest> myCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Class> pages = classService.findByStudentAndFilter(pageRequest, filterValue, id);
        return ClassRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public List<ClassRequest> allClassesByFilter(int page, int size, Sort.Direction direction, String sort, String filterValue) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Class> pages = classService.findAllClassByFilter(pageRequest, filterValue);
        return ClassRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/count")
    public ResponseEntity getClassesCount() {
        return new ResponseEntity(classService.getClassesCount(), HttpStatus.OK);
    }

}
