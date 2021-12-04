package com.esky.model.pojo;

import com.esky.model.entities.Category;
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
public class CategoryRequest extends ESKYTracableRequest {
    /**
     *
     */

    private Long id;

    private String name;

    private String description;

    public Category toSimpleObject() {
        Category category = new Category();
        category.setId(id);
        return category;
    }

    public static List<CategoryRequest> buildRequest(Collection<Category> categories) {
        List<CategoryRequest> list = new ArrayList<>();
        categories.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static Category buildCategory(CategoryRequest request) {
        final Category category = new Category();
        category.setId(request.getId());
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        category.setUpdated(new Date());
        if (request.getUpdator() != null)
            category.setUpdator(new User(request.getUpdator()));
        category.setCreated(request.getCreated());
        if (request.getCreator() != null)
            category.setCreator(UserRequest.buildUser(request.getCreator()));
        return category;
    }
}
