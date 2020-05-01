package com.esky.model.pojo;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public abstract class ESKYTracableRequest {
    private Date updated = new Date();

    private Date created = new Date();

    private UserRequest creator;

    private Long updator;
}