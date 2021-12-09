package com.esky.serviceImpl;

import com.esky.model.entities.Like;
import com.esky.model.entities.Post;
import com.esky.model.entities.User;
import com.esky.model.pojo.LikeRequest;
import com.esky.repository.LikeRepository;
import com.esky.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service("likeService")
public class LikeServiceImpl implements LikeService {

    @Autowired
    private LikeRepository likeRepository;

    //Save Like:
    @Override
    public Like saveLike(LikeRequest likeRequest) {
        Like aLike = LikeRequest.buildLike(likeRequest);
        return likeRepository.save(aLike);
    }

    //Delete Like:
    @Override
    public void deleteLike(LikeRequest likeRequest) {
        Like aLike = LikeRequest.buildLike(likeRequest);
        likeRepository.delete(aLike);
    }

    //Delete Like by ID:
    @Override
    public void deleteLikeById(Long id) {
        likeRepository.deleteById(id);
    }

    //Get Like by ID:
    @Override
    public Like getLikeById(LikeRequest request) {
        Like op = likeRepository.findByPostAndCreator(new Post(request.getPost()), new User(request.getCreator().getId()));
        return op;
    }

    //Get Likes Count:
    @Override
    public long getLikesCount() {
        return likeRepository.count();
    }
}
