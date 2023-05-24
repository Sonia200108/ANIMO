package edu.isep.animo_backend.repositories;

import edu.isep.animo_backend.models.Farm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmRepository extends JpaRepository<Farm, Long> {


}
