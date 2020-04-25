package com.esky.service;

import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface UserService {

    //Save User:
    public User saveUser(User user);

    //Update User:
    public User updateUser(User user);

    //Delete User:
    public void deleteUser(User user);

    //Delete User by ID:
    public void deleteUserById(Long id);

    //Get User by ID:
    public User getUserById(Long id);

    //Get all Users by Filter:
    public Page<User> findAllUserByFilter(Pageable pageable, String filterValue);

    //Find all Users:
    public Page<User> findAllUser(PageRequest pageRequest);

    //Get Users Count
    public long getUsersCount();

}