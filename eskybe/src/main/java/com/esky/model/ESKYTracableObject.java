package com.esky.model;

import com.esky.model.entities.User;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@MappedSuperclass
public abstract class ESKYTracableObject implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 952019L;

    @Column(name = "UPDATED")
    protected Date updated = new Date();

    @Column(name = "CREATED")
    protected Date created = new Date();

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "CREATOR_ID", referencedColumnName = "ID")
    protected User creator;

    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "UPDATOR_ID", referencedColumnName = "ID")
    protected User updator;

    public ESKYTracableObject() {
    }

}
