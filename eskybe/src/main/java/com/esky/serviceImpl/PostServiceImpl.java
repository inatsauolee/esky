package com.esky.serviceImpl;

import com.esky.model.entities.File;
import com.esky.model.entities.Post;
import com.esky.model.entities.User;
import com.esky.model.pojo.PostRequest;
import com.esky.repository.FileRepository;
import com.esky.repository.PostRepository;
import com.esky.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@Service("postService")
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private FileRepository fileRepository;

    //Save Post:
    @Override
    public Post savePost(PostRequest postRequest){
        Post aPost = PostRequest.buildPost(postRequest);
        return postRepository.save(aPost);
    }

    //Save Post:
    @Override
    public File uploadFile(File file) throws IOException {
        return fileRepository.save(file);
    }

    //Update Post:
    @Override
    public Post updatePost(PostRequest postRequest){
        Post aPost = PostRequest.buildPost(postRequest);
        return postRepository.save(aPost);
    }

    //Delete Post:
    @Override
    public void deletePost(PostRequest postRequest){
        Post aPost = PostRequest.buildPost(postRequest);
        postRepository.delete(aPost);
    }

    //Delete Post by ID:
    @Override
    public void deletePostById(Long id) {
        postRepository.deleteById(id);
    }

    //Get Post by ID:
    @Override
    public Post getPostById(Long id) {
        Optional<Post> op = postRepository.findById(id);
        if (op.isPresent()) return op.get();
        return null;
    }

    //Get all Posts by Student + Filter:
    @Override
    public Page<Post> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long id) {
        return postRepository.findByStudentAndFilter(pageRequest, id, '%' + filterValue + '%');
    }

    //Get all Posts by Creator + Filter:
    @Override
    public Page<Post> findAllPostByCreator(PageRequest pageRequest, String filterValue, Long id) {
        if ("".equals(filterValue)) {
            return postRepository.findByCreatorId(pageRequest, id);
        } else {
            return postRepository.findByCreatorIdAndFilter(pageRequest, new User(id), '%' + filterValue + '%');
        }
    }

    //Get my Posts by Creator:
    @Override
    public List<PostRequest> findMyPostByCreator(Long id) {
        return PostRequest.buildRequest(postRepository.findMyPostByCreator(new User(id)));
    }

    //Get all Posts by Filter:
    @Override
    public Page<Post> findAllPostByFilter(PageRequest pageRequest, String filterValue) {
        return postRepository.findAllByFilter(pageRequest, '%' + filterValue + '%');
    }

    //Find all Posts:
    @Override
    public Page<Post> findAllPost(PageRequest pageRequest) {
        return postRepository.findAll(pageRequest);
    }

    //Get Courses Count By Creator:
    @Override
    public long getCoursesCountByCreator(Long id) {
        return postRepository.countByCreator(id);
    }

    //Get Courses Count By Student:
    @Override
    public long getCoursesCountByStudent(Long id) {
        return postRepository.countByStudent(id);
    }

    //Get Posts Count:
    @Override
    public long getPostsCount() {
        return postRepository.count();
    }
}
