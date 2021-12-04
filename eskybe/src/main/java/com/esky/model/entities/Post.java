package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.ClassRequest;
import com.esky.model.pojo.PostRequest;
import com.esky.model.pojo.UserRequest;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 */

@Entity
@Table(name = "POSTS")
@Getter
@Setter
public class Post extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "TEXT")
    private String text;

    @Column(name = "FILES")
    private String file;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "CATEGORY_ID", referencedColumnName = "ID")
    private Category category;

    public Post() {}

    public Post(Long id) {
        this.id = id;
    }

    public PostRequest toRequest() {
        final PostRequest postRequest = new PostRequest();
        postRequest.setId(this.id);
        postRequest.setTitle(this.title);
        postRequest.setText(this.text);
        postRequest.setFile(this.file);
        postRequest.setCategory(this.category != null ? this.category.getId() : null);
        return postRequest;
    }

}
