package com.esky.model.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.esky.model.pojo.UserRequest;
import lombok.Getter;
import lombok.Setter;

/**
 */

@Entity
@Table(name = "USERS")
@Getter
@Setter
public class User implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "login", nullable = false, unique = true)
    private String username;

    @Column(name = "fname")
    private String firstname;

    @Column(name = "lname")
    private String lastname;

    @Column(name = "status")
    private Long status;

    @Column(name = "email")
    private String email;

    @Column(name = "lang")
    private String lang;

    @Column(name = "role")
    private String role;

    @Column(name = "pass")
    private String password;

    @Column(name = "preferences")
    private String preferences;

//    @JsonIgnore
//    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
//    @LazyCollection(LazyCollectionOption.TRUE)
//    private Set<Folder> folders;

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public User() { }

    public User(Long creator) {
        this.id = creator;
    }

    public boolean isAdmin() {
        return "A".equals(role);
    }

    public UserRequest toRequest() {
        final UserRequest userRequest = new UserRequest();
        userRequest.setId(this.id);
        userRequest.setUserName(this.username);
        userRequest.setFirstName(this.firstname);
        userRequest.setLastName(this.lastname);
        userRequest.setStatus(this.status);
        userRequest.setEmail(this.email);
        userRequest.setLang(this.lang);
        userRequest.setRole(this.role);
        userRequest.setPassword(this.password);
        userRequest.setPreferences(this.preferences);
        return userRequest;
    }
}
