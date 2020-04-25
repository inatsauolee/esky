package com.esky.repository;

import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//CrudRepository<Project, Integer>{
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsername(String userName);

    Page<User> findAll(Pageable pageable);
    Page<User> findByUsernameIgnoreCaseContainingOrFirstnameIgnoreCaseContainingOrLastnameIgnoreCaseContaining(Pageable pageable, String username, String firstName, String lastName);
}
