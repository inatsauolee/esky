package com.esky.model.pojo;

import com.esky.model.entities.Category;
import com.esky.model.entities.Comment;
import com.esky.model.entities.Post;
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
public class CommentRequest extends ESKYTracableRequest {
    /**
     *
     */

    private Long id;

    private String text;

    private Long post;

    public Comment toSimpleObject() {
        Comment comment = new Comment();
        comment.setId(id);
        return comment;
    }

    public static Set<CommentRequest> buildRequest(Collection<Comment> comments) {
        Set<CommentRequest> list = new HashSet<>();
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
        if (request.getPost() != null)
            comment.setPost(new Post(request.getPost()));
        comment.setUpdated(new Date());
        if (request.getUpdator() != null)
            comment.setUpdator(new User(request.getUpdator()));
        comment.setCreated(request.getCreated());
        if (request.getCreator() != null)
            comment.setCreator(UserRequest.buildUser(request.getCreator()));
        return comment;
    }
}
