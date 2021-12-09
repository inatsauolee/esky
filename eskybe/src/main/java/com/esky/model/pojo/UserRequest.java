package com.esky.model.pojo;

import java.io.Serializable;
import java.util.*;

import com.esky.model.entities.Authority;
import com.esky.model.entities.File;
import com.esky.model.entities.User;

import lombok.Getter;
import lombok.Setter;

/**
 *
 */
@Getter
@Setter
public class UserRequest extends ESKYTracableRequest implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959596L;

    private Long id;

    private String username;

    private String firstname;

    private String lastname;

    private Long status;

    private String role;

    private Boolean enabled;

    private File file;

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
        user.setRole(request.role);
        user.setEnabled(request.enabled);
        user.setFile(request.file);
        return user;
    }

}
