package com.esky.webservice;

import com.esky.model.entities.User;
import com.esky.model.pojo.UserRequest;
import com.esky.service.UserService;
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

@CrossOrigin
@RestController
@RequestMapping(path = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity saveUser(@RequestBody User user) {
        return new ResponseEntity(userService.saveUser(user), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity updateUser(@RequestBody User request) {
        User finalUser = userService.getUserById(request.getId());
        finalUser.setFirstname(request.getFirstname());
        finalUser.setLastname(request.getLastname());
        finalUser.setFile(request.getFile());
        return new ResponseEntity(userService.saveUser(finalUser), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getUserById(@PathVariable Long id) {
        User aUser = userService.getUserById(id);
        if (aUser == null) {
            return new ResponseEntity("No User found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(aUser, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public Set<UserRequest> allUsers(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<User> pages= userService.findAllUser(pageRequest);
        return UserRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/creator/{id}")
    public Set<UserRequest> allCoursesByCreator(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<User> pages = userService.findAllUsersByCreator(pageRequest, filterValue, id);
        return UserRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public Set<UserRequest> allCoursesByFilter(int page, int size, Sort.Direction direction, String sort, String filterValue) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<User> pages = userService.findAllUsersByFilter(pageRequest, filterValue);
        return UserRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/role/{role}")
    public Set<UserRequest> allCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable String role) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<User> pages = userService.findByRoleAndFilter(pageRequest, filterValue, role);
        return UserRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/student/count/{id}")
    public ResponseEntity getStudentsCountByTeacher(@PathVariable Long id) {
        return new ResponseEntity(userService.getStudentsCountByTeacher(id), HttpStatus.OK);
    }

    @GetMapping("/creator/count/{id}")
    public ResponseEntity getUserCountByCreator(@PathVariable Long id) {
        return new ResponseEntity(userService.getUserCountByCreator(id), HttpStatus.OK);
    }

    @GetMapping("/all/count")
    public ResponseEntity getUsersCount() {
        return new ResponseEntity(userService.getUsersCount(), HttpStatus.OK);
    }

}
