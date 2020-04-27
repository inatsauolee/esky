package com.esky.model.pojo;

import java.io.Serializable;
import java.util.*;

import com.esky.model.entities.Authority;
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

    private String username;

    private String firstname;

    private String lastname;

    private Long status;

    private String email;

    private String lang;

    private String role;

    private Boolean enabled;

    private String password;

    private String preferences;

    private Date lastPasswordResetDate;

    private List<Authority> authorities;

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
        user.setUsername(request.username);
        user.setFirstname(request.firstname);
        user.setLastname(request.lastname);
        user.setStatus(request.status);
        user.setEmail(request.email);
        user.setLang(request.lang);
        user.setRole(request.role);
        user.setEnabled(request.enabled);
        user.setPassword(request.password);
        user.setPreferences(request.preferences);
        user.setLastPasswordResetDate(request.lastPasswordResetDate);
        user.setAuthorities(request.authorities);
        return user;
    }

}
