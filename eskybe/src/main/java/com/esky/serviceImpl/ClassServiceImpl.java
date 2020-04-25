package com.esky.serviceImpl;

import com.esky.model.entities.Class;
import com.esky.repository.ClassRepository;
import com.esky.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service("classService")
public class ClassServiceImpl implements ClassService {

    @Autowired
    private ClassRepository classRepository;

    //Save Class:
    @Override
    public Class saveClass(Class classe) {
        return classRepository.save(classe);
    }

    //Update Class:
    @Override
    public Class updateClass(Class classe) {
        return classRepository.save(classe);
    }

    //Delete Class:
    @Override
    public void deleteClass(Class classe) {
        classRepository.delete(classe);
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
        if(op.isPresent()) return op.get();
        return null;
    }

    //Get Class by Creator:
    @Override
    public Page<Class> getClassByCreator(Pageable pageable, Long id) {
        return classRepository.findByCreator(pageable, id);
    }

    //Get all Classes by Filter:
    @Override
    public Page<Class> findAllClassByFilter(Pageable pageable, String filterValue) {
        return classRepository.findByNameIgnoreCaseContainingOrSchoolIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(pageable, filterValue, filterValue, filterValue);
    }

    //Find all Classes:
    @Override
    public Page<Class> findAllClass(PageRequest pageRequest){
        return classRepository.findAll(pageRequest);
    }

    //Get Classes Count:
    @Override
    public long getClasssCount() {
        return classRepository.count();
    }
}
