package com.esky.repository;

import com.esky.model.entities.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Post findCategoryByName(String projectName);

    Page<Post> findAll(Pageable pageable);

    Page<Post> findByCategoryId(Pageable pageable, Long id);
}
