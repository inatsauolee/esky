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

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity saveUser(@RequestBody UserRequest userRequest) {
        return new ResponseEntity(userService.saveUser(userRequest), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody UserRequest userRequest) {
        return new ResponseEntity(userService.saveUser(userRequest), HttpStatus.OK);
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

    @GetMapping("/all/filter")
    public List<User> allUsers(Pageable pageable, String filterValue) {
        Page<User> page= userService.findAllUserByFilter(pageable, filterValue);
        return page.getContent();
    }

    @GetMapping("/all/count")
    public ResponseEntity getUsersCount() {
        return new ResponseEntity(userService.getUsersCount(), HttpStatus.OK);
    }

}
