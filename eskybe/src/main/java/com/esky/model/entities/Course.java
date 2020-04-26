package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.ClassRequest;
import com.esky.model.pojo.CourseRequest;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 */

@Entity
@Table(name = "COURSES")
@Getter
@Setter
public class Course extends ESKYTracableObject implements Serializable {
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

    @Column(name = "SUBJECT")
    private String subject;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "STATUS")
    private String status;

    @ElementCollection
    @LazyCollection(LazyCollectionOption.FALSE)
    private Set<Class> classes;

    public Course() {}

    public Course(Long id) {
        this.id = id;
    }

    public CourseRequest toRequest() {
        final CourseRequest courseRequest = new CourseRequest();
        courseRequest.setId(this.id);
        courseRequest.setName(this.name);
        courseRequest.setSubject(this.subject);
        courseRequest.setDescription(this.description);
        courseRequest.setStatus(this.status);
        courseRequest.setClasses(ClassRequest.buildRequest(this.classes));
        courseRequest.setUpdated(this.getUpdated());
        courseRequest.setUpdator(this.getUpdator() != null ? this.getUpdator().getId() : null);
        courseRequest.setCreated(this.getCreated());
        courseRequest.setCreator(this.getCreator() != null ? this.getCreator().getId() : null);
        return courseRequest;
    }

}
