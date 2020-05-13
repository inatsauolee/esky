package com.esky.service;

import com.esky.model.entities.Class;
import com.esky.model.pojo.ClassRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ClassService {

    //Save Class:
    public Class saveClass(ClassRequest aClass);

    //Update Class:
    public Class updateClass(ClassRequest aClass);

    //Delete Class:
    public void deleteClass(ClassRequest aClass);

    //Delete Class by ID:
    public void deleteClassById(Long id);

    //Get Class by ID:
    public Class getClassById(Long id);

    //Get all Classes by Filter:
    public Page<Class> findAllClassByFilter(PageRequest pageRequest, String filterValue);

    //Get all Classes by Creator:
    public Page<Class> findAllClassByCreator(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get all Classes by Student:
    public Page<Class> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get my Classes by Creator:
    public List<ClassRequest> findMyClassByCreator(Long idCreator);

    //Find all Classes:
    public Page<Class> findAllClass(PageRequest pageRequest);

    //Get Courses Count By Creator:
    public long getCoursesCountByCreator(Long id);

    //Get Courses Count By Student:
    public long getCoursesCountByStudent(Long id);

    //Get Classes Count
    public long getClassesCount();

}