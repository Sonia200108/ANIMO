package edu.isep.animo_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tblBlimps")
public class Blimp {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter @Setter Long blimpid;
    private @Getter @Setter String name;
    private @Getter @Setter double longitude;
    private @Getter @Setter double latitude;

    @ManyToOne
    @JoinColumn(name = "farmid")
    private @Getter @Setter Farm farm;


}
