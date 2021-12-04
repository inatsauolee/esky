package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.CategoryRequest;
import com.esky.model.pojo.ClassRequest;
import com.esky.model.pojo.UserRequest;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 */

@Entity
@Table(name = "CATEGORIES")
@Getter
@Setter
public class Category extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    public Category() {}

    public Category(Long id) {
        this.id = id;
    }

    public CategoryRequest toRequest() {
        final CategoryRequest categoryRequest = new CategoryRequest();
        categoryRequest.setId(this.id);
        categoryRequest.setName(this.name);
        categoryRequest.setDescription(this.description);
        categoryRequest.setUpdated(this.getUpdated());
        categoryRequest.setUpdator(this.getUpdator() != null ? this.getUpdator().getId() : null);
        categoryRequest.setCreated(this.getCreated());
        categoryRequest.setCreator(this.getCreator() != null ? this.getCreator().toRequest() : null);
        return categoryRequest;
    }

}
