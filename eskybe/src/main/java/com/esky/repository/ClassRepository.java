package com.esky.repository;

import com.esky.model.entities.Class;
import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    Class findClassByName(String projectName);

    Page<Class> findAll(Pageable pageable);

    Page<Class> findByCreatorId(Pageable pageable, Long id);

    @Query(value = "SELECT * FROM CLASSES c WHERE c.ID IN (SELECT class_id FROM classes_students s WHERE s.students_id = ?1)" +
            " AND (c.name LIKE ?2 OR c.school LIKE ?2 OR c.city LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Class> findByStudentAndFilter(Pageable pageable, Long id, String filterValue);

    @Query(value = "SELECT * FROM CLASSES c WHERE c.CREATOR_ID = ?1", nativeQuery = true)
    List<Class> findMyClassByCreator(User user);

    @Query(value = "SELECT * FROM CLASSES c WHERE c.CREATOR_ID = ?1 AND (c.name LIKE ?2 OR c.school LIKE ?2 OR c.city LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Class> findByCreatorIdAndFilter(Pageable pageable, User user, String filterValue);

    @Query(value = "SELECT * FROM CLASSES c WHERE c.name LIKE ?1 OR c.school LIKE ?1 OR c.city LIKE ?1 OR c.description LIKE ?1", nativeQuery = true)
    Page<Class> findAllByFilter(Pageable pageable, String filterValue);
}
