package com.esky.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 */

@Entity
@Table(name = "FILES")
@Getter
@Setter
public class File {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "type")
    private String type;
    
    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "fileByte", columnDefinition = "varbinary(MAX)")
    private byte[] fileByte;
    
    public File() {}

    public File(Long id) {
        this.id = id;
    }

    public File(String name, String type, byte[] fileByte) {
        this.name = name;
        this.type = type;
        this.fileByte = fileByte;
    }

    /*   public FileRequest toRequest() {
        final FileRequest fileRequest = new FileRequest();
        fileRequest.setId(this.id);
        fileRequest.setName(this.name);
        fileRequest.setType(this.type);
        fileRequest.setFileByte(this.fileByte);
        return fileRequest;
    } */

}
