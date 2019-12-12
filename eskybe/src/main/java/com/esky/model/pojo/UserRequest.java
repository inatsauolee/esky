package com.esky.model.pojo;

import java.io.Serializable;

import com.esky.model.entities.User;
import org.json.simple.JSONArray;

import lombok.Getter;
import lombok.Setter;

/**
 */
@Getter
@Setter
public class UserRequest implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959596L;

    private Long id;

    private String userName;

    private String firstName;

    private String lastName;

    private Long status;

    private String email;

    private String lang;

    private String role;

    private String password;

    private String favorite;

    private JSONArray lastOpenneds;

    private String token;


    public User toUser() {
        User user = new User(this);
        user.setId(id);
        return user;
    }

    public User toLazyUser() {
        User user = new User();
        user.setId(id);
        return user;
    }

}
