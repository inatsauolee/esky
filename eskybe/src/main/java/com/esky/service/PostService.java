package com.esky.service;

import com.esky.model.entities.File;
import com.esky.model.entities.Post;
import com.esky.model.pojo.PostRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.io.IOException;
import java.util.List;

public interface PostService {

    //Save Post:
    public Post savePost(PostRequest aPost);

    //Upload File:
    public File uploadFile(File file) throws IOException;

    //Update Post:
    public Post updatePost(PostRequest aPost);

    //Delete Post:
    public void deletePost(PostRequest aPost);

    //Delete Post by ID:
    public void deletePostById(Long id);

    //Get Post by ID:
    public Post getPostById(Long id);

    //Get all Posts by Filter:
    public Page<Post> findAllPostByFilter(PageRequest pageRequest, String filterValue);

    //Get all Posts by Creator:
    public Page<Post> findAllPostByCreator(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get all Posts by Student:
    public Page<Post> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get my Posts by Creator:
    public List<PostRequest> findMyPostByCreator(Long idCreator);

    //Find all Posts:
    public Page<Post> findAllPost(PageRequest pageRequest);

    //Get Courses Count By Creator:
    public long getCoursesCountByCreator(Long id);

    //Get Courses Count By Student:
    public long getCoursesCountByStudent(Long id);

    //Get Posts Count
    public long getPostsCount();

}