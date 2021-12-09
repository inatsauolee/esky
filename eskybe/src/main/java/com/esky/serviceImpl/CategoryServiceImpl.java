package com.esky.serviceImpl;

import com.esky.model.entities.Category;
import com.esky.model.entities.User;
import com.esky.model.pojo.CategoryRequest;
import com.esky.repository.CategoryRepository;
import com.esky.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service("categoryService")
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    //Save Category:
    @Override
    public Category saveCategory(CategoryRequest categoryRequest) {
        Category aCategory = CategoryRequest.buildCategory(categoryRequest);
        return categoryRepository.save(aCategory);
    }

    //Update Category:
    @Override
    public Category updateCategory(CategoryRequest categoryRequest) {
        Category aCategory = CategoryRequest.buildCategory(categoryRequest);
        return categoryRepository.save(aCategory);
    }

    //Delete Category:
    @Override
    public void deleteCategory(CategoryRequest categoryRequest) {
        Category aCategory = CategoryRequest.buildCategory(categoryRequest);
        categoryRepository.delete(aCategory);
    }

    //Delete Category by ID:
    @Override
    public void deleteCategoryById(Long id) {
        categoryRepository.deleteById(id);
    }

    //Get Category by ID:
    @Override
    public Category getCategoryById(Long id) {
        Optional<Category> op = categoryRepository.findById(id);
        if (op.isPresent()) return op.get();
        return null;
    }

    //Get all Categorys by Student + Filter:
    @Override
    public Page<Category> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long id) {
        return categoryRepository.findByStudentAndFilter(pageRequest, id, '%' + filterValue + '%');
    }

    //Get all Categorys by Creator + Filter:
    @Override
    public Page<Category> findAllCategoryByCreator(PageRequest pageRequest, String filterValue, Long id) {
        if ("".equals(filterValue)) {
            return categoryRepository.findByCreatorId(pageRequest, id);
        } else {
            return categoryRepository.findByCreatorIdAndFilter(pageRequest, new User(id), '%' + filterValue + '%');
        }
    }

    //Get my Categorys by Creator:
    @Override
    public List<CategoryRequest> findMyCategoryByCreator(Long id) {
        return CategoryRequest.buildRequest(categoryRepository.findMyCategoryByCreator(new User(id)));
    }

    //Get all Categorys by Filter:
    @Override
    public Page<Category> findAllCategoryByFilter(PageRequest pageRequest, String filterValue) {
        return categoryRepository.findAllByFilter(pageRequest, '%' + filterValue + '%');
    }

    //Find all Categorys:
    @Override
    public Page<Category> findAllCategory(PageRequest pageRequest) {
        return categoryRepository.findAll(pageRequest);
    }

    //Get Courses Count By Creator:
    @Override
    public long getCoursesCountByCreator(Long id) {
        return categoryRepository.countByCreator(id);
    }

    //Get Courses Count By Student:
    @Override
    public long getCoursesCountByStudent(Long id) {
        return categoryRepository.countByStudent(id);
    }

    //Get Categorys Count:
    @Override
    public long getCategorysCount() {
        return categoryRepository.count();
    }
}
