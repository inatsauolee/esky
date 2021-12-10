package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import constant.AuthorityName;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.esky.model.pojo.UserRequest;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

/**
 */

@Entity
@Table(name = "USERS")
@Getter
@Setter
public class User extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true)
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

    @Column(name = "enabled")
    private Boolean enabled;

    @Column(name = "password")
    private String password;

    @Column(name = "preferences")
    private String preferences;

    @Column(name = "lastPasswordResetDate")
    private Date lastPasswordResetDate;

    @ElementCollection
    @LazyCollection(LazyCollectionOption.FALSE)
	private List<Authority> authorities;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = File.class)
    @JoinColumn(name = "FILE_ID", referencedColumnName = "ID")
    private File file;

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
        userRequest.setUsername(this.username);
        userRequest.setFirstname(this.firstname);
        userRequest.setLastname(this.lastname);
        userRequest.setStatus(this.status);
        userRequest.setRole(this.role);
        userRequest.setLang(this.lang);
        userRequest.setPreferences(this.preferences);
        userRequest.setEnabled(this.enabled);
        userRequest.setFile(this.file);
        return userRequest;
    }
}
