package com.esky.model.pojo;

import com.esky.model.entities.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;


/**
 */
@Getter
@Setter
@NoArgsConstructor
public class LikeRequest extends ESKYTracableRequest {
    /**
     *
     */

    private Long id;

    private Long post;

    public Like toSimpleObject() {
        Like like = new Like();
        like.setId(id);
        return like;
    }


    public static Set<LikeRequest> buildRequest(Collection<Like> likes) {
        Set<LikeRequest> list = new HashSet<>();
        likes.forEach(el -> {
            if (el != null)
                list.add(el.toRequest());
        });
        return list;
    }

    public static Like buildLike(LikeRequest request) {
        final Like like = new Like();
        like.setId(request.getId());
        if (request.getPost() != null)
            like.setPost(new Post(request.getPost()));
        like.setUpdated(new Date());
        if (request.getUpdator() != null)
            like.setUpdator(new User(request.getUpdator()));
        like.setCreated(request.getCreated());
        if (request.getCreator() != null)
            like.setCreator(UserRequest.buildUser(request.getCreator()));
        return like;
    }
}
