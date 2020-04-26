package com.esky.webservice;

import com.esky.model.entities.Class;
import com.esky.model.pojo.ClassRequest;
import com.esky.service.ClassService;
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
import java.util.Set;

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
    public Set<ClassRequest> allClasss(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Class> pages= classService.findAllClass(pageRequest);
        return ClassRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public List<Class> allClasss(Pageable pageable, String filterValue) {
        Page<Class> page= classService.findAllClassByFilter(pageable, filterValue);
        return page.getContent();
    }

    @GetMapping("/all/count")
    public ResponseEntity getClasssCount() {
        return new ResponseEntity(classService.getClasssCount(), HttpStatus.OK);
    }

}
