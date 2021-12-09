package com.esky.repository;

import com.esky.model.entities.Comment;
import com.esky.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Comment findCommentByText(String text);

    Page<Comment> findAll(Pageable pageable);

   // @Query(value = "INSERT INTO posts_comments (post_id ,comments_id) VALUES (?1, ?2)", nativeQuery = true)
  //  void addToPostComment(Long commentId, Long postId);

    Page<Comment> findByCreatorId(Pageable pageable, Long id);

    @Query(value = "SELECT * FROM COMMENTS c WHERE c.ID IN (SELECT class_id FROM classes_students s WHERE s.students_id = ?1)" +
            " AND (c.name LIKE ?2 OR c.school LIKE ?2 OR c.city LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Comment> findByStudentAndFilter(Pageable pageable, Long id, String filterValue);

    @Query(value = "SELECT * FROM COMMENTS c WHERE c.CREATOR_ID = ?1", nativeQuery = true)
    List<Comment> findMyCommentByCreator(User user);

    @Query(value = "SELECT * FROM COMMENTS c WHERE c.CREATOR_ID = ?1 AND (c.name LIKE ?2 OR c.school LIKE ?2 OR c.city LIKE ?2 OR c.description LIKE ?2)", nativeQuery = true)
    Page<Comment> findByCreatorIdAndFilter(Pageable pageable, User user, String filterValue);

    @Query(value = "SELECT * FROM COMMENTS c WHERE c.name LIKE ?1 OR c.school LIKE ?1 OR c.city LIKE ?1 OR c.description LIKE ?1", nativeQuery = true)
    Page<Comment> findAllByFilter(Pageable pageable, String filterValue);

    @Query(value = "SELECT COUNT(*) FROM COMMENTS c WHERE c.CREATOR_ID = ?1", nativeQuery = true)
    Long countByCreator(Long id);

    @Query(value = "SELECT COUNT(*) FROM COMMENTS c WHERE c.ID IN (SELECT class_id FROM classes_students s WHERE s.students_id = ?1)", nativeQuery = true)
    Long countByStudent(Long id);
}
