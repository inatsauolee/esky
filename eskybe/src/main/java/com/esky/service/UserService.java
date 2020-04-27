package com.esky.service;

import com.esky.model.entities.User;
import com.esky.model.pojo.UserRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface UserService {

    //Save User:
    public User saveUser(UserRequest user);

    //Update User:
    public User updateUser(UserRequest user);

    //Delete User:
    public void deleteUser(UserRequest user);

    //Delete User by ID:
    public void deleteUserById(Long id);

    //Get User by ID:
    public User getUserById(Long id);

    //Get User by Username:
    public User getUserByUsername(String username);

    //Get User by Creator:
    public User getUserByCreator(Long id);

    //Find all Users:
    public Page<User> findAllUser(PageRequest pageRequest);

    //Get Users Count
    public long getUsersCount();

    public Page<User> findAllUserByFilter(Pageable pageable, String filterValue);

}