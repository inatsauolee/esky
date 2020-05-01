package com.esky.repository;

import com.esky.model.entities.Course;
import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    Course findCourseByName(String projectName);

    Page<Course> findAll(Pageable pageable);
    Page<Course> findByCreatorId(Pageable pageable, Long id);

    @Query(value = "SELECT * FROM COURSES c WHERE c.ID IN (SELECT course_id FROM courses_classes s WHERE s.classes_id IN " +
            "(SELECT class_id FROM classes_students cs WHERE cs.students_id = ?1 ))" +
            " AND (c.name LIKE ?2 OR c.subject LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Course> findByStudentAndFilter(Pageable pageable, Long id, String filterValue);

    @Query(value = "SELECT * FROM COURSES c WHERE c.ID IN (SELECT course_id FROM courses_classes s WHERE s.classes_id IN " +
            "(SELECT class_id FROM classes_students cs WHERE cs.students_id = ?1 )) AND c.status = ?2" +
            " AND (c.name LIKE ?3 OR c.subject LIKE ?3 OR c.description LIKE ?3)", nativeQuery = true)
    Page<Course> findByStudentAndStatusAndFilter(Pageable pageable, Long id, String status, String filterValue);

    @Query(value = "SELECT * FROM COURSES c WHERE c.CREATOR_ID = ?1", nativeQuery = true)
    List<Course> findMyCourseByCreator(User user);

    @Query(value = "SELECT * FROM COURSES c WHERE c.CREATOR_ID = ?1 AND (c.name LIKE ?2 OR c.subject LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Course> findByCreatorIdAndFilter(Pageable pageable, User user, String filterValue);

    @Query(value = "SELECT * FROM COURSES c WHERE c.CREATOR_ID = ?1 AND c.status  ?2 AND (c.name LIKE ?3 OR c.subject LIKE ?3 OR c.description LIKE ?3)", nativeQuery = true)
    Page<Course> findByCreatorIdAndStatusAndFilter(Pageable pageable, User user, String status, String filterValue);

    @Query(value = "SELECT * FROM COURSES c WHERE c.name LIKE ?1 OR c.subject LIKE ?1 OR c.description LIKE ?1", nativeQuery = true)
    Page<Course> findAllByFilter(Pageable pageable, String filterValue);

    @Query(value = "SELECT * FROM COURSES c WHERE c.status = ?1 AND (c.name LIKE ?2 OR c.subject LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Course> findAllByStatusAndFilter(Pageable pageable, String status, String filterValue);

    Page<Course> findByCreatorIdAndNameIgnoreCaseContainingOrSubjectIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(Pageable pageable, Long id, String name, String subject, String description);
    Page<Course> findByNameIgnoreCaseContainingOrSubjectIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(Pageable pageable, String name, String subject, String description);
}
