package edu.isep.animo_backend.repositories;

import edu.isep.animo_backend.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    @Query(value = "SELECT * FROM tbl_addresses WHERE street = ?1 AND number = ?2 AND zip_code = ?3 AND city = ?4 AND country = ?5", nativeQuery = true)
    Address findByWholeAddress(String street, String number, String zip, String city, String country);


}