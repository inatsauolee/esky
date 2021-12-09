package com.esky.model.pojo;

import com.esky.model.entities.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;
import java.util.zip.Deflater;

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

    private File file;

    private Long category;

    private Set<CommentRequest> comments;

    private Set<LikeRequest> likes;

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

    public static Post buildPost(PostRequest request){
        final Post post = new Post();
        post.setId(request.getId());
        post.setTitle(request.getTitle());
        post.setText(request.getText());
        if(request.getComments() != null) {
            Set<Comment> list = new HashSet<>();
            for (CommentRequest r : request.getComments()) {
                Comment comment = CommentRequest.buildComment(r);
                list.add(comment);
            }
            post.setComments(list);
        }
        if(request.getLikes() != null) {
            Set<Like> list = new HashSet<>();
            for (LikeRequest r : request.getLikes()) {
                Like like = LikeRequest.buildLike(r);
                list.add(like);
            }
            post.setLikes(list);
        }
        if (request.getCategory() != null)
            post.setCategory(new Category(request.getCategory()));
        post.setFile(request.getFile());
        return post;
    }

    // compress the image bytes before storing it in the database
    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }

}
