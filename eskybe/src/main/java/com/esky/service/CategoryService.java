package com.esky.service;

import com.esky.model.entities.Category;
import com.esky.model.pojo.CategoryRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface CategoryService {

    //Save Category:
    public Category saveCategory(CategoryRequest aCategory);

    //Update Category:
    public Category updateCategory(CategoryRequest aCategory);

    //Delete Category:
    public void deleteCategory(CategoryRequest aCategory);

    //Delete Category by ID:
    public void deleteCategoryById(Long id);

    //Get Category by ID:
    public Category getCategoryById(Long id);

    //Get all Categorys by Filter:
    public Page<Category> findAllCategoryByFilter(PageRequest pageRequest, String filterValue);

    //Get all Categorys by Creator:
    public Page<Category> findAllCategoryByCreator(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get all Categorys by Student:
    public Page<Category> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long idCreator);

    //Get my Categorys by Creator:
    public List<CategoryRequest> findMyCategoryByCreator(Long idCreator);

    //Find all Categorys:
    public Page<Category> findAllCategory(PageRequest pageRequest);

    //Get Courses Count By Creator:
    public long getCoursesCountByCreator(Long id);

    //Get Courses Count By Student:
    public long getCoursesCountByStudent(Long id);

    //Get Categorys Count
    public long getCategorysCount();

}