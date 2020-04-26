package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
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
@Table(name = "CLASSES")
@Getter
@Setter
public class Class extends ESKYTracableObject implements Serializable {
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

    @Column(name = "SCHOOL")
    private String school;

    @Column(name = "CITY")
    private String city;

    @Column(name = "DESCRIPTION")
    private String description;

    @ElementCollection
    private Set<User> students;

    public Class() {}

    public Class(Long id) {
        this.id = id;
    }

    public ClassRequest toRequest() {
        final ClassRequest classRequest = new ClassRequest();
        classRequest.setId(this.id);
        classRequest.setName(this.name);
        classRequest.setSchool(this.school);
        classRequest.setCity(this.city);
        classRequest.setDescription(this.description);
        classRequest.setStudents(UserRequest.buildRequest(this.students));
        classRequest.setUpdated(this.getUpdated());
        classRequest.setUpdator(this.getUpdator() != null ? this.getUpdator().getId() : null);
        classRequest.setCreated(this.getCreated());
        classRequest.setCreator(this.getCreator() != null ? this.getCreator().getId() : null);
        return classRequest;
    }

}
