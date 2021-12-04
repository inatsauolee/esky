package com.esky.model.pojo;

import com.esky.model.entities.Category;
import com.esky.model.entities.Class;
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
public class PostRequest {
    /**
     *
     */

    private Long id;

    private String title;

    private String text;

    private String file;

    private Long category;

    public Post toSimpleObject() {
        Post post = new Post();
        post.setId(id);
        return post;
    }

    public static List<PostRequest> buildRequest(Collection<Post> posts) {
        List<PostRequest> list = new ArrayList<>();
        posts.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static Post buildPost(PostRequest request) {
        final Post post = new Post();
        post.setId(request.getId());
        post.setTitle(request.getTitle());
        post.setText(request.getText());
        post.setFile(request.getFile());
        if (request.getCategory() != null)
            post.setCategory(new Category(request.getCategory()));
        return post;
    }
}
