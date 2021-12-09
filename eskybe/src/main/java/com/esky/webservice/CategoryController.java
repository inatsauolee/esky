package com.esky.webservice;

import com.esky.model.entities.Category;
import com.esky.model.pojo.CategoryRequest;
import com.esky.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/category", produces = MediaType.APPLICATION_JSON_VALUE)
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/save")
    public ResponseEntity saveCategory(@RequestBody CategoryRequest categoryRequest) {
        return new ResponseEntity(categoryService.saveCategory(categoryRequest), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateCategory(@PathVariable Long id, @RequestBody CategoryRequest categoryRequest) {
        return new ResponseEntity(categoryService.saveCategory(categoryRequest), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCategory(@PathVariable Long id) {
        if (null == categoryService.getCategoryById(id)) {
            return new ResponseEntity("No Category found for ID " + id, HttpStatus.NOT_FOUND);
        }
        categoryService.deleteCategoryById(id);
        return new ResponseEntity("Category "+ id +" deleted !", HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getCategoryById(@PathVariable Long id) {
        Category aCategory = categoryService.getCategoryById(id);
        if (aCategory == null) {
            return new ResponseEntity("No Category found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(aCategory, HttpStatus.OK);
    }

    @SuppressWarnings({ "deprecation" })
    @GetMapping("/all")
    public List<CategoryRequest> allCategorys(int page, int size, Sort.Direction direction, String sort) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Category> pages = categoryService.findAllCategory(pageRequest);
        return CategoryRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/creator/{id}")
    public List<CategoryRequest> allCategorysByCreator(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Category> pages = categoryService.findAllCategoryByCreator(pageRequest, filterValue, id);
        return CategoryRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/student/{id}")
    public List<CategoryRequest> allCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Category> pages = categoryService.findByStudentAndFilter(pageRequest, filterValue, id);
        return CategoryRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/mine/creator/{id}")
    public List<CategoryRequest> myCategorysByCreator(@PathVariable Long id) {
        return categoryService.findMyCategoryByCreator(id);
    }

    @GetMapping("/mine/student/{id}")
    public List<CategoryRequest> myCourcesByStudent(int page, int size, Sort.Direction direction, String sort, String filterValue, @PathVariable Long id) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Category> pages = categoryService.findByStudentAndFilter(pageRequest, filterValue, id);
        return CategoryRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/all/filter")
    public List<CategoryRequest> allCategorysByFilter(int page, int size, Sort.Direction direction, String sort, String filterValue) {
        PageRequest pageRequest = new PageRequest(page, size, direction, sort);
        Page<Category> pages = categoryService.findAllCategoryByFilter(pageRequest, filterValue);
        return CategoryRequest.buildRequest(pages.getContent());
    }

    @GetMapping("/creator/count/{id}")
    public ResponseEntity getCoursesCountByCreator(@PathVariable Long id) {
        return new ResponseEntity(categoryService.getCoursesCountByCreator(id), HttpStatus.OK);
    }

    @GetMapping("/student/count/{id}")
    public ResponseEntity getCoursesCountByStudent(@PathVariable Long id) {
        return new ResponseEntity(categoryService.getCoursesCountByStudent(id), HttpStatus.OK);
    }

    @GetMapping("/all/count")
    public ResponseEntity getCategorysCount() {
        return new ResponseEntity(categoryService.getCategorysCount(), HttpStatus.OK);
    }

}
