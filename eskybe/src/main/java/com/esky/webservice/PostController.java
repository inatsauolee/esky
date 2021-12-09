package com.esky.webservice;

import com.esky.model.entities.File;
import com.esky.model.entities.Post;
import com.esky.model.pojo.PostRequest;
import com.esky.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.Deflater;

@CrossOrigin
@RestController
@RequestMapping(path = "/post", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/save")
    public ResponseEntity savePost(@RequestBody PostRequest postRequest) {
        return new ResponseEntity(postService.savePost(postRequest), HttpStatus.OK);
    }

    @PostMapping("/uploadFile")
    public ResponseEntity uploadFile(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        File f = new File(file.getOriginalFilename(), file.getContentType(),
                file.getBytes());
        return new ResponseEntity(postService.uploadFile(f), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updatePost(@PathVariable Long id, @RequestBody PostRequest postRequest) {
        return new ResponseEntity(postService.savePost(postRequest), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) {
        if (null == postService.getPostById(id)) {
            return new ResponseEntity("No Post found for ID " + id, HttpStatus.NOT_FOUND);
        }
        postService.deletePostById(id);
        return new ResponseEntity("Post "+ id +" deleted !", HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getPostById(@PathVariable Long id) {
        Post aPost = postService.getPostById(id);
        if (aPost == null) {
            return new ResponseEntity("No Post found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(aPost, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public List<PostRequest> allPosts(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Post> pages = postService.findAllPost(pageRequest);
        return PostRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/creator/{id}")
    public List<PostRequest> allPostsByCreator(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Post> pages = postService.findAllPostByCreator(pageRequest, filterValue, id);
        return PostRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/student/{id}")
    public List<PostRequest> allCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Post> pages = postService.findByStudentAndFilter(pageRequest, filterValue, id);
        return PostRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/mine/creator/{id}")
    public List<PostRequest> myPostsByCreator(@PathVariable Long id) {
        return postService.findMyPostByCreator(id);
    }

    @GetMapping("/mine/student/{id}")
    public List<PostRequest> myCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Post> pages = postService.findByStudentAndFilter(pageRequest, filterValue, id);
        return PostRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public List<PostRequest> allPostsByFilter(int page, int size, Sort.Direction direction, String sort, String filterValue) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Post> pages = postService.findAllPostByFilter(pageRequest, filterValue);
        return PostRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/creator/count/{id}")
    public ResponseEntity getCoursesCountByCreator(@PathVariable Long id) {
        return new ResponseEntity(postService.getCoursesCountByCreator(id), HttpStatus.OK);
    }

    @GetMapping("/student/count/{id}")
    public ResponseEntity getCoursesCountByStudent(@PathVariable Long id) {
        return new ResponseEntity(postService.getCoursesCountByStudent(id), HttpStatus.OK);
    }

    @GetMapping("/all/count")
    public ResponseEntity getPostsCount() {
        return new ResponseEntity(postService.getPostsCount(), HttpStatus.OK);
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
