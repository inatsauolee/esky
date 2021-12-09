package com.esky.repository;

import com.esky.model.entities.Like;
import com.esky.model.entities.Post;
import com.esky.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
    Like findByPostAndCreator(Post post, User creator);
}
