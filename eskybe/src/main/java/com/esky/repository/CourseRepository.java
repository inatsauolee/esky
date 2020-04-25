package com.esky.repository;

import com.esky.model.entities.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    Course findCourseByName(String projectName);

    Page<Course> findAll(Pageable pageable);
    Page<Course> findByCreator(Pageable pageable, Long id);
    Page<Course> findByNameIgnoreCaseContainingOrSubjectIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(Pageable pageable, String name, String subject, String description);
}
