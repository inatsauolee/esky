package com.esky.model.entities;

import com.esky.model.ESKYTracableObject;
import com.esky.model.pojo.CourseRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 */

@Entity
@Table(name = "COURSE")
@Getter
@Setter
public class Course extends ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1999955959595L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

//    @JsonIgnore
//    @ManyToOne(targetEntity = Folder.class)
//    @JoinColumn(name = "PARENT_ID", nullable = true, referencedColumnName = "ID")
//    private Folder parent;

//	@OneToMany(mappedBy="PARENT",targetEntity=Folder.class)
//	@LazyCollection(LazyCollectionOption.TRUE)
//	private Set<Folder> children;

//    @Column(name = "SORT")
//    private int sort = 0;
//
//    @OneToMany(mappedBy = "folderParent", cascade = CascadeType.ALL)
//    @LazyCollection(LazyCollectionOption.TRUE)
//    private Set<NavTransactionVersion> transactionVersions;
//
//    @Column(name = "TEMPLATE")
//    private Boolean template;

//    @Column(name = "ISSTRUCTURE")
//    private Boolean isStructure = false;

    public Course() {

    }

    public Course(Long folderParent) {
        this.id = folderParent;
    }

    public Course(CourseRequest request) {
        this.id = request.getId();
        this.name = request.getName();
//        if (request.getParentId() != null)
//            this.parent = new Folder(request.getParentId());
////        this.sort = request.getSort();
//        this.isStructure = request.getIsStructure();
//        this.template = request.getTemplate();
        if (request.getCreated() != null)
            this.setCreated(request.getCreated());
        else
            this.setCreated(new Date());
        this.setUpdated(new Date());
        this.setUpdator(new User(request.getUpdator()));
        this.setCreator(new User(request.getCreator()));
    }

    @Override
    public ESKYTracableObject getParentObject() {
//        if (this.parent != null)
//            return parent;
//        else
            return null;
    }

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "CREATOR_ID", referencedColumnName = "ID")
    public User getCreator() {
        return super.getCreator();
    }

    public CourseRequest toRequest() {
        CourseRequest request = new CourseRequest();
        request.setId(id);
        request.setName(name);
//        request.setParentId(parent != null ? parent.getId() : null);
        request.setCreated(created);
        request.setUpdated(updated);
//        request.setSort(sort);
//        request.setTemplate(template);
//        request.setIsStructure(isStructure);
        request.setCreator(creator.getId());
        request.setUpdator(updator.getId());
        return request;
    }

}
