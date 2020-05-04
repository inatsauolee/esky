package com.esky.serviceImpl;

import com.esky.model.entities.Class;
import com.esky.model.entities.User;
import com.esky.model.pojo.ClassRequest;
import com.esky.repository.ClassRepository;
import com.esky.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service("classService")
public class ClassServiceImpl implements ClassService {

    @Autowired
    private ClassRepository classRepository;

    //Save Class:
    @Override
    public Class saveClass(ClassRequest classRequest) {
        Class aClass = ClassRequest.buildClass(classRequest);
        return classRepository.save(aClass);
    }

    //Update Class:
    @Override
    public Class updateClass(ClassRequest classRequest) {
        Class aClass = ClassRequest.buildClass(classRequest);
        return classRepository.save(aClass);
    }

    //Delete Class:
    @Override
    public void deleteClass(ClassRequest classRequest) {
        Class aClass = ClassRequest.buildClass(classRequest);
        classRepository.delete(aClass);
    }

    //Delete Class by ID:
    @Override
    public void deleteClassById(Long id) {
        classRepository.deleteById(id);
    }

    //Get Class by ID:
    @Override
    public Class getClassById(Long id) {
        Optional<Class> op = classRepository.findById(id);
        if (op.isPresent()) return op.get();
        return null;
    }

    //Get all Classes by Student + Filter:
    @Override
    public Page<Class> findByStudentAndFilter(PageRequest pageRequest, String filterValue, Long id) {
        return classRepository.findByStudentAndFilter(pageRequest, id, '%' + filterValue + '%');
    }

    //Get all Classes by Creator + Filter:
    @Override
    public Page<Class> findAllClassByCreator(PageRequest pageRequest, String filterValue, Long id) {
        if ("".equals(filterValue)) {
            return classRepository.findByCreatorId(pageRequest, id);
        } else {
            return classRepository.findByCreatorIdAndFilter(pageRequest, new User(id), '%' + filterValue + '%');
        }
    }

    //Get my Classes by Creator:
    @Override
    public List<ClassRequest> findMyClassByCreator(Long id) {
        return ClassRequest.buildRequest(classRepository.findMyClassByCreator(new User(id)));
    }

    //Get all Classes by Filter:
    @Override
    public Page<Class> findAllClassByFilter(PageRequest pageRequest, String filterValue) {
        return classRepository.findAllByFilter(pageRequest, '%' + filterValue + '%');
    }

    //Find all Classes:
    @Override
    public Page<Class> findAllClass(PageRequest pageRequest) {
        return classRepository.findAll(pageRequest);
    }

    //Get Classes Count:
    @Override
    public long getClassesCount() {
        return classRepository.count();
    }
}
