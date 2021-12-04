package com.esky.model.pojo;

import com.esky.model.entities.Category;
import com.esky.model.entities.Comment;
import com.esky.model.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;


/**
 */
@Getter
@Setter
@NoArgsConstructor
public class CommentRequest extends ESKYTracableRequest {
    /**
     *
     */

    private Long id;

    private String text;

    public Category toSimpleObject() {
        Category category = new Category();
        category.setId(id);
        return category;
    }

    public static List<CommentRequest> buildRequest(Collection<Comment> comments) {
        List<CommentRequest> list = new ArrayList<>();
        comments.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static Comment buildComment(CommentRequest request) {
        final Comment comment = new Comment();
        comment.setId(request.getId());
        comment.setText(request.getText());
        comment.setUpdated(new Date());
        if (request.getUpdator() != null)
            comment.setUpdator(new User(request.getUpdator()));
        comment.setCreated(request.getCreated());
        if (request.getCreator() != null)
            comment.setCreator(UserRequest.buildUser(request.getCreator()));
        return comment;
    }
}
