package com.esky.service;

import com.esky.model.entities.Class;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface ClassService {

    //Save Class:
    public Class saveClass(Class classe);

    //Update Class:
    public Class updateClass(Class classe);

    //Delete Class:
    public void deleteClass(Class classe);

    //Delete Class by ID:
    public void deleteClassById(Long id);

    //Get Class by ID:
    public Class getClassById(Long id);

    //Get Class by Creator:
    public Page<Class> getClassByCreator(Pageable pageable, Long id);

    //Get all Classs by Filter:
    public Page<Class> findAllClassByFilter(Pageable pageable, String filterValue);

    //Find all Classs:
    public Page<Class> findAllClass(PageRequest pageRequest);

    //Get Classs Count
    public long getClasssCount();

}