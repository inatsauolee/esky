package com.esky.repository;

import com.esky.model.entities.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Page<Comment> findAll(Pageable pageable);

    Page<Comment> findById(Pageable pageable, Long id);
}
