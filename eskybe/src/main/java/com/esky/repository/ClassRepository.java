package com.esky.repository;

import com.esky.model.entities.Class;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    Class findClassByName(String projectName);

    Page<Class> findAll(Pageable pageable);
    Page<Class> findByCreator(Pageable pageable, Long id);
    Page<Class> findByNameIgnoreCaseContainingOrSchoolIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(Pageable pageable, String name, String school, String description);
}
