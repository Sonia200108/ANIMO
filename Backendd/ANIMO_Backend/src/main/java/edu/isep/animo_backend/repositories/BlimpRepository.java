package edu.isep.animo_backend.repositories;

import edu.isep.animo_backend.models.Blimp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlimpRepository extends JpaRepository<Blimp, Long> {

    List<Blimp> findByFarmId(Long farmId);

}

