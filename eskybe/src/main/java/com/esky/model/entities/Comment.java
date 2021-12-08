package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.ClassRequest;
import com.esky.model.pojo.CommentRequest;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

/**
 */

@Entity
@Table(name = "COMMENTS")
@Getter
@Setter
public class Comment extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TEXT")
    private String text;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = Post.class)
    @JoinColumn(name = "POST_ID", referencedColumnName = "ID")
    private Post post;

    public Comment() {}

    public Comment(Long id) {
        this.id = id;
    }

    public CommentRequest toRequest() {
        final CommentRequest commentRequest = new CommentRequest();
        commentRequest.setId(this.id);
        commentRequest.setText(this.text);
        commentRequest.setPost(this.getPost() != null ? this.getPost().getId() : null);
        commentRequest.setUpdated(this.getUpdated());
        commentRequest.setUpdator(this.getUpdator() != null ? this.getUpdator().getId() : null);
        commentRequest.setCreated(this.getCreated());
        commentRequest.setCreator(this.getCreator() != null ? this.getCreator().toRequest() : null);
        return commentRequest;
    }

}
