package com.esky.model.pojo;
import com.esky.model.entities.Course;
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
public class CourseRequest extends ESKYTracableRequest {
    /**
     *
     */

    private Long id;

    private String name;

    private String subject;

    private String description;

    private String status;

    private Set<ClassRequest> classes;

    public Course toSimpleObject() {
        Course course = new Course();
        course.setId(id);
        return course;
    }

    public static List<CourseRequest> buildRequest(Collection<Course> courses) {
        List<CourseRequest> list = new ArrayList<>();
        courses.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static Course buildCourse(CourseRequest request) {
        final Course course = new Course();
        course.setId(request.id);
        course.setName(request.name);
        course.setSubject(request.subject);
        course.setDescription(request.description);
        course.setStatus(request.status);
        course.setUpdated(new Date());
        if (request.getUpdator() != null)
            course.setUpdator(new User(request.getUpdator()));
        course.setCreated(request.getCreated());
        if (request.getCreator() != null)
            course.setCreator(new User(request.getCreator()));
        return course;
    }
}
