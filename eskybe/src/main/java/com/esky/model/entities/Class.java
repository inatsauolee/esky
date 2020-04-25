package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
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

}
