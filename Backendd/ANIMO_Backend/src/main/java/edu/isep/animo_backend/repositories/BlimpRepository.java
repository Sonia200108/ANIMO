package edu.isep.animo_backend.repositories;

import edu.isep.animo_backend.models.Blimp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlimpRepository extends JpaRepository<Blimp, Long> {


}

