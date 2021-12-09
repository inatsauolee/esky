package com.esky.service;

import com.esky.model.entities.Comment;
import com.esky.model.pojo.CommentRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Set;

public interface CommentService {

    //Save Comment:
    public Comment saveComment(CommentRequest comment);

    //Update Comment:
    public Comment updateComment(CommentRequest comment);

    //Delete Comment:
    public void deleteComment(CommentRequest comment);

    //Delete Comment by ID:
    public void deleteCommentById(Long id);

    //Get Comment by ID:
    public Comment getCommentById(Long id);

    //Get all Comments by Filter:
    public Page<Comment> findAllCommentByFilter(PageRequest pageRequest, String filterValue);

    //Get all Comments by Creator:
    public Page<Comment> findAllCommentByCreator(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get all Comments by Student:
    public Page<Comment> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get my Comments by Creator:
    public Set<CommentRequest> findMyCommentByCreator(Long idCreator);

    //Find all Comments:
    public Page<Comment> findAllComment(PageRequest pageRequest);

    //Get Courses Count By Creator:
    public long getCoursesCountByCreator(Long id);

    //Get Courses Count By Student:
    public long getCoursesCountByStudent(Long id);

    //Get Comments Count
    public long getCommentsCount();

}