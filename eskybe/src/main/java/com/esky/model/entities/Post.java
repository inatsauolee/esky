package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.*;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.Serializable;
import java.util.Set;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

/**
 */

@Entity
@Table(name = "POSTS")
@Getter
@Setter
public class Post extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Lob
    @Column(name = "TEXT")
    private String text;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "CATEGORY_ID", referencedColumnName = "ID")
    private Category category;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = File.class)
    @JoinColumn(name = "FILE_ID", referencedColumnName = "ID")
    private File file;

    @OneToMany( targetEntity=Comment.class, mappedBy="post" )
    private Set<Comment> comments;

    @ElementCollection
    private Set<Like> likes;

    public Post() {}

    public Post(Long id) {
        this.id = id;
    }

    public PostRequest toRequest(){
        final PostRequest postRequest = new PostRequest();
        postRequest.setId(this.id);
        postRequest.setTitle(this.title);
        postRequest.setText(this.text);
        postRequest.setFile(this.file);
        postRequest.setCategory(this.category != null ? this.category.getId() : null);
        postRequest.setComments(CommentRequest.buildRequest(this.comments));
        postRequest.setLikes(LikeRequest.buildRequest(this.likes));
        return postRequest;
    }

    // uncompress the image bytes before returning it to the angular application
    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }

}
