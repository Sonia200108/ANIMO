package edu.isep.animo_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tblUsers")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @Getter @Setter Long id;
    private @Getter @Setter String firstname;
    private @Getter @Setter String lastname;

    @ManyToOne
    @JoinColumn(name = "farmid")
    private @Getter @Setter Farm farm;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name="tblusertorole",
            joinColumns = @JoinColumn(name = "userid"),
            inverseJoinColumns = @JoinColumn(name = "roleid")
    )
    private @Getter @Setter List<Role> roles = new ArrayList<>();

}
