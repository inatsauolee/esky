package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.CommentRequest;
import com.esky.model.pojo.LikeRequest;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

/**
 */

@Entity
@Table(name = "LIKES")
@Getter
@Setter
public class Like extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = Post.class)
    @JoinColumn(name = "POST_ID", referencedColumnName = "ID")
    private Post post;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = Comment.class)
    @JoinColumn(name = "COMMENT_ID", referencedColumnName = "ID")
    private Comment comment;

    public Like() {}

    public Like(Long id) {
        this.id = id;
    }

    public LikeRequest toRequest() {
        final LikeRequest likeRequest = new LikeRequest();
        likeRequest.setId(this.id);
        likeRequest.setPost(this.getPost() != null ? this.getPost().getId() : null);
        likeRequest.setComment(this.getComment() != null ? this.getComment().getId() : null);
        likeRequest.setUpdated(this.getUpdated());
        likeRequest.setUpdator(this.getUpdator() != null ? this.getUpdator().getId() : null);
        likeRequest.setCreated(this.getCreated());
        likeRequest.setCreator(this.getCreator() != null ? this.getCreator().toRequest() : null);
        return likeRequest;
    }

}
