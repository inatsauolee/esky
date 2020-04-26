package com.esky.model.pojo;

import java.io.Serializable;
import java.util.*;

import com.esky.model.entities.User;

import lombok.Getter;
import lombok.Setter;

/**
 *
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

    private String preferences;


    public User toUser() {
        User user = new User(this.id);
        return user;
    }

    public static Set<UserRequest> buildRequest(Collection<User> users) {
        Set<UserRequest> list = new HashSet<>();
        users.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static User buildUser(UserRequest request) {
        final User user = new User();
        user.setId(request.id);
        user.setUsername(request.userName);
        user.setFirstname(request.firstName);
        user.setLastname(request.lastName);
        user.setStatus(request.status);
        user.setEmail(request.email);
        user.setLang(request.lang);
        user.setRole(request.role);
        user.setPassword(request.password);
        user.setPreferences(request.preferences);
        return user;
    }

}
