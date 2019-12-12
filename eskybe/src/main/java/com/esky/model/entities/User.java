package com.esky.model.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.esky.model.pojo.UserRequest;
import com.esky.tool.ParseCustomFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.json.simple.JSONArray;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;

/**
 */

@Entity
@Table(name = "USER")
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

    @Column(name = "favorite")
    private String favorite;

    @Column(name = "OPENNED_TRANSACTIONS")
    private String lastOpenned;

//    @JsonIgnore
//    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
//    @LazyCollection(LazyCollectionOption.TRUE)
//    private Set<Folder> folders;

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public User() {

    }

    public User(UserRequest userRequest) {
        setUsername(userRequest.getUserName());
        setFirstname(userRequest.getFirstName());
        setLastname(userRequest.getLastName());
        setPassword(userRequest.getPassword());
        this.setEmail(userRequest.getEmail());
        this.setFavorite(userRequest.getFavorite());
        this.setRole(userRequest.getRole());
        this.setFavorite(userRequest.getFavorite());
        this.setLang(userRequest.getLang());
        this.setStatus(userRequest.getStatus());
        if (userRequest.getLastOpenneds() == null) {
            this.setLastOpenned((new JSONArray()).toJSONString());
        } else
            this.setLastOpenned(userRequest.getLastOpenneds().toJSONString());
    }

    public User(Long creator) {
        this.id = creator;
    }

    public boolean isAdmin() {
        return "A".equals(role);
    }

    public UserRequest toUserRequest() {
        UserRequest request = new UserRequest();
        request.setId(this.getId());
        request.setUserName(this.getUsername());
        request.setFirstName(this.getFirstname());
        request.setLastName(this.getLastname());
        request.setPassword(this.getPassword());
        request.setEmail(this.getEmail());
        request.setFavorite(this.getFavorite());
        request.setRole(this.getRole());
        request.setFavorite(this.getFavorite());
        request.setLang(this.getLang());
        request.setStatus(this.getStatus());
        // change
        request.setLastOpenneds(ParseCustomFormat.parseJSONArray(lastOpenned));
        return request;
    }
}
