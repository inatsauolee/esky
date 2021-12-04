package com.esky.repository;

import com.esky.model.entities.Category;
import com.esky.model.entities.Class;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Class findCategoryByName(String projectName);

    Page<Category> findAll(Pageable pageable);

    Page<Category> findByCategoryId(Pageable pageable, Long id);
}
