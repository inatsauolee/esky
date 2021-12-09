package com.esky.serviceImpl;

import com.esky.model.entities.Comment;
import com.esky.model.entities.User;
import com.esky.model.pojo.CommentRequest;
import com.esky.repository.CommentRepository;
import com.esky.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service("commentService")
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    //Save Comment:
    @Override
    public Comment saveComment(CommentRequest commentRequest) {
        Comment aComment = CommentRequest.buildComment(commentRequest);
        return commentRepository.save(aComment);
    }

    //Update Comment:
    @Override
    public Comment updateComment(CommentRequest commentRequest) {
        Comment aComment = CommentRequest.buildComment(commentRequest);
        return commentRepository.save(aComment);
    }

    //Delete Comment:
    @Override
    public void deleteComment(CommentRequest commentRequest) {
        Comment aComment = CommentRequest.buildComment(commentRequest);
        commentRepository.delete(aComment);
    }

    //Delete Comment by ID:
    @Override
    public void deleteCommentById(Long id) {
        commentRepository.deleteById(id);
    }

    //Get Comment by ID:
    @Override
    public Comment getCommentById(Long id) {
        Optional<Comment> op = commentRepository.findById(id);
        if (op.isPresent()) return op.get();
        return null;
    }

    //Get all Comments by Student + Filter:
    @Override
    public Page<Comment> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long id) {
        return commentRepository.findByStudentAndFilter(pageRequest, id, '%' + filterValue + '%');
    }

    //Get all Comments by Creator + Filter:
    @Override
    public Page<Comment> findAllCommentByCreator(PageRequest pageRequest, String filterValue, Long id) {
        if ("".equals(filterValue)) {
            return commentRepository.findByCreatorId(pageRequest, id);
        } else {
            return commentRepository.findByCreatorIdAndFilter(pageRequest, new User(id), '%' + filterValue + '%');
        }
    }

    //Get my Comments by Creator:
    @Override
    public Set<CommentRequest> findMyCommentByCreator(Long id) {
        return CommentRequest.buildRequest(commentRepository.findMyCommentByCreator(new User(id)));
    }

    //Get all Comments by Filter:
    @Override
    public Page<Comment> findAllCommentByFilter(PageRequest pageRequest, String filterValue) {
        return commentRepository.findAllByFilter(pageRequest, '%' + filterValue + '%');
    }

    //Find all Comments:
    @Override
    public Page<Comment> findAllComment(PageRequest pageRequest) {
        return commentRepository.findAll(pageRequest);
    }

    //Get Courses Count By Creator:
    @Override
    public long getCoursesCountByCreator(Long id) {
        return commentRepository.countByCreator(id);
    }

    //Get Courses Count By Student:
    @Override
    public long getCoursesCountByStudent(Long id) {
        return commentRepository.countByStudent(id);
    }

    //Get Comments Count:
    @Override
    public long getCommentsCount() {
        return commentRepository.count();
    }
}
