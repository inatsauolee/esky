package com.esky.repository;

import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//CrudRepository<Project, Integer>{
public interface UserRepository extends JpaRepository<User, Long> {
    Page<User> findAll(Pageable pageable);
    User findByUsername(String username);
    Page<User> findByUsernameIgnoreCaseContainingOrFirstnameIgnoreCaseContainingOrLastnameIgnoreCaseContaining(Pageable pageable, String username, String firstName, String lastName);
}
