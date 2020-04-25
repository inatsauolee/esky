package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.LazyCollection;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
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
    private Set<Class> classes;

    public Course() {}

    public Course(Long id) {
        this.id = id;
    }

}
