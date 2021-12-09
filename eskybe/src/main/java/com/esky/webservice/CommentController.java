package com.esky.webservice;

import com.esky.model.entities.Comment;
import com.esky.model.pojo.CommentRequest;
import com.esky.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping(path = "/comment", produces = MediaType.APPLICATION_JSON_VALUE)
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/save")
    public ResponseEntity saveComment(@RequestBody CommentRequest commentRequest) {
        return new ResponseEntity(commentService.saveComment(commentRequest), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateComment(@PathVariable Long id, @RequestBody CommentRequest commentRequest) {
        return new ResponseEntity(commentService.saveComment(commentRequest), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteComment(@PathVariable Long id) {
        if (null == commentService.getCommentById(id)) {
            return new ResponseEntity("No Comment found for ID " + id, HttpStatus.NOT_FOUND);
        }
        commentService.deleteCommentById(id);
        return new ResponseEntity("Comment "+ id +" deleted !", HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getCommentById(@PathVariable Long id) {
        Comment aComment = commentService.getCommentById(id);
        if (aComment == null) {
            return new ResponseEntity("No Comment found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(aComment, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public Set<CommentRequest> allComments(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Comment> pages = commentService.findAllComment(pageRequest);
        return CommentRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/creator/{id}")
    public Set<CommentRequest> allCommentsByCreator(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Comment> pages = commentService.findAllCommentByCreator(pageRequest, filterValue, id);
        return CommentRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/student/{id}")
    public Set<CommentRequest> allCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Comment> pages = commentService.findByStudentAndFilter(pageRequest, filterValue, id);
        return CommentRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/mine/creator/{id}")
    public Set<CommentRequest> myCommentsByCreator(@PathVariable Long id) {
        return commentService.findMyCommentByCreator(id);
    }

    @GetMapping("/mine/student/{id}")
    public Set<CommentRequest> myCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Comment> pages = commentService.findByStudentAndFilter(pageRequest, filterValue, id);
        return CommentRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public Set<CommentRequest> allCommentsByFilter(int page, int size, Sort.Direction direction, String sort, String filterValue) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Comment> pages = commentService.findAllCommentByFilter(pageRequest, filterValue);
        return CommentRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/creator/count/{id}")
    public ResponseEntity getCoursesCountByCreator(@PathVariable Long id) {
        return new ResponseEntity(commentService.getCoursesCountByCreator(id), HttpStatus.OK);
    }

    @GetMapping("/student/count/{id}")
    public ResponseEntity getCoursesCountByStudent(@PathVariable Long id) {
        return new ResponseEntity(commentService.getCoursesCountByStudent(id), HttpStatus.OK);
    }

    @GetMapping("/all/count")
    public ResponseEntity getCommentsCount() {
        return new ResponseEntity(commentService.getCommentsCount(), HttpStatus.OK);
    }

}
