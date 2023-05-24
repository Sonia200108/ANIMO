package edu.isep.animo_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tblFarms")
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter @Setter Long id;
    private @Getter @Setter String name;

    @OneToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private @Getter @Setter Address address;

}
