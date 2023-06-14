package edu.isep.animo_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tblUsers")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @Getter @Setter Long id;
    private @Getter @Setter String firstname;
    private @Getter @Setter String lastname;
    private @Getter @Setter String auth0id;

    @ManyToOne
    @JoinColumn(name = "farmid")
    private @Getter @Setter Farm farm;

}
