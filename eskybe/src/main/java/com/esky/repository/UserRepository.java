package com.esky.repository;

import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
//CrudRepository<Project, Integer>{
public interface UserRepository extends JpaRepository<User, Long> {
    Page<User> findAll(Pageable pageable);
    Page<User> findByCreatorId(Pageable pageable, Long id);

    @Query(value = "SELECT * FROM USERS u WHERE u.CREATOR_ID = ?1 AND (u.fname LIKE ?2 OR u.lname LIKE ?2 OR u.login LIKE ?2)", nativeQuery = true)
    Page<User> findByCreatorIdAndFilter(Pageable pageable, User user, String filterValue);

    @Query(value = "SELECT * FROM USERS u WHERE u.fname LIKE ?1 OR u.lname LIKE ?1 OR u.login LIKE ?1", nativeQuery = true)
    Page<User> findByFilter(Pageable pageable, String filterValue);

    @Query(value = "SELECT * FROM USERS u WHERE u.role LIKE ?1 AND (u.fname LIKE ?2 OR u.lname LIKE ?2 OR u.login LIKE ?2)", nativeQuery = true)
    Page<User> findByRoleAndFilter(Pageable pageable, String role, String filterValue);

    User findByUsername(String username);
    Page<User> findByUsernameIgnoreCaseContainingOrFirstnameIgnoreCaseContainingOrLastnameIgnoreCaseContaining(Pageable pageable, String username, String firstName, String lastName);
}
