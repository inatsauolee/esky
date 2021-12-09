package com.esky.service;

import com.esky.model.entities.Like;
import com.esky.model.pojo.LikeRequest;

public interface LikeService {

    //Save Like:
    public Like saveLike(LikeRequest like);

    //Delete Like:
    public void deleteLike(LikeRequest like);

    //Delete Like by ID:
    public void deleteLikeById(Long id);

    //Get Like by ID:
    public Like getLikeById(LikeRequest request);

    //Get Likes Count
    public long getLikesCount();

}