package edu.isep.animo_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tblAddresses")
public class Address {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter @Setter Long id;
    private @Getter @Setter String street;
    private @Getter @Setter String number;
    private @Getter @Setter String zipCode;
    private @Getter @Setter String city;
    private @Getter @Setter String country;


}
