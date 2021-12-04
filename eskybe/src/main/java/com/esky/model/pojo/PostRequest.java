package com.esky.model.pojo;

import com.esky.model.entities.Class;
import com.esky.model.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;


/**
 */
@Getter
@Setter
@NoArgsConstructor
public class ClassRequest extends ESKYTracableRequest {
    /**
     *
     */

    private Long id;

    private String name;

    private String school;

    private String city;

    private String description;

    private Set<UserRequest> students;

    public Class toSimpleObject() {
        Class aClass = new Class();
        aClass.setId(id);
        return aClass;
    }

    public static List<ClassRequest> buildRequest(Collection<Class> classes) {
        List<ClassRequest> list = new ArrayList<>();
        classes.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static Class buildClass(ClassRequest request) {
        final Class aClass = new Class();
        aClass.setId(request.id);
        aClass.setName(request.name);
        aClass.setSchool(request.school);
        aClass.setCity(request.city);
        aClass.setDescription(request.description);
        if(request.getStudents() != null) {
            Set<User> cList = new HashSet<>();
            for (UserRequest uq : request.getStudents()) {
                User student = UserRequest.buildUser(uq);
                cList.add(student);
            }
            aClass.setStudents(cList);
        }
        aClass.setUpdated(new Date());
        if (request.getUpdator() != null)
            aClass.setUpdator(new User(request.getUpdator()));
        aClass.setCreated(request.getCreated());
        if (request.getCreator() != null)
            aClass.setCreator(UserRequest.buildUser(request.getCreator()));
        return aClass;
    }
}
