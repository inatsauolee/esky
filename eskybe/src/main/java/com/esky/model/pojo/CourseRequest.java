package com.esky.model.pojo;

import com.esky.model.ESKYTracableObject;
import com.esky.model.entities.Course;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


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

    private Long parentId;

    private int sort = 0;

    private Boolean template = false;
    private Boolean isStructure = false;


    public Course toSimpleObject() {
        Course course = new Course();
        course.setId(id);
        return course;
    }

    public static List<CourseRequest> buildRequest(Collection<Course> courses) {
        List<CourseRequest> list = new ArrayList<>();
//        folders.forEach(el -> {
//            if (el != null && el.getTemplate() == null || !el.getTemplate())
//                list.add(el.toRequest());
//        });
        return list;
    }

    @Override
    public Long getParentObjectId() {
        return parentId;
    }
}
