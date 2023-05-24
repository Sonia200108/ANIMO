package edu.isep.animo_backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tblrole")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @Getter @Setter long id;
    private @Getter @Setter String name;

    @JsonIgnore
    @ManyToMany(mappedBy = "roles")
    private @Getter @Setter List<User> users = new ArrayList<>();

}