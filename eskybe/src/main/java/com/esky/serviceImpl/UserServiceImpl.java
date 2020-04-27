package com.esky.serviceImpl;

import com.esky.model.entities.User;
import com.esky.model.pojo.UserRequest;
import com.esky.repository.UserRepository;
import com.esky.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    //Save User:
    @Override
    public User saveUser(UserRequest userRequest) {
        User user = UserRequest.buildUser(userRequest);
        return userRepository.save(user);
    }

    //Update User:
    @Override
    public User updateUser(UserRequest userRequest) {
        User user = UserRequest.buildUser(userRequest);
        return userRepository.save(user);
    }

    //Delete User:
    @Override
    public void deleteUser(UserRequest userRequest) {
        User user = UserRequest.buildUser(userRequest);
        userRepository.delete(user);
    }

    //Delete User by ID:
    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    //Get User by ID:
    @Override
    public User getUserById(Long id) {
        Optional<User> op = userRepository.findById(id);
        if(op.isPresent()) return op.get();
        return null;
    }

    //Get User by Username:
    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    //Get User by Creator:
    @Override
    public User getUserByCreator(Long id) {
        Optional<User> op = userRepository.findById(id);
        if(op.isPresent()) return op.get();
        return null;
    }

    //Get all Users by Filter:
    @Override
    public Page<User> findAllUserByFilter(Pageable pageable, String filterValue) {
        return userRepository.findByUsernameIgnoreCaseContainingOrFirstnameIgnoreCaseContainingOrLastnameIgnoreCaseContaining(pageable, filterValue, filterValue, filterValue);
    }

    //Find all Users:
    @Override
    public Page<User> findAllUser(PageRequest pageRequest){
        return userRepository.findAll(pageRequest);
    }

    //Get Users Count:
    @Override
    public long getUsersCount() {
        return userRepository.count();
    }
}