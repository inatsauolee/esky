package com.esky.webservice;

import com.esky.model.entities.Like;
import com.esky.model.pojo.LikeRequest;
import com.esky.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "/like", produces = MediaType.APPLICATION_JSON_VALUE)
public class LikeController {

    @Autowired
    private LikeService likeService;

    @PostMapping("/save")
    public ResponseEntity saveLike(@RequestBody LikeRequest likeRequest) {
        return new ResponseEntity(likeService.saveLike(likeRequest), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity deleteLike(@RequestBody LikeRequest likeRequest) {
        Like like = likeService.getLikeById(likeRequest);
        if (null == like) {
            return new ResponseEntity("No Like found for ID ", HttpStatus.NOT_FOUND);
        }
        likeService.deleteLikeById(like.getId());
        return new ResponseEntity(like.toRequest(), HttpStatus.OK);
    }

    @GetMapping("/all/count")
    public ResponseEntity getLikesCount() {
        return new ResponseEntity(likeService.getLikesCount(), HttpStatus.OK);
    }
}
