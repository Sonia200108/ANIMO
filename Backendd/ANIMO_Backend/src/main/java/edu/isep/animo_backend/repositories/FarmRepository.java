package edu.isep.animo_backend.repositories;

import edu.isep.animo_backend.models.Farm;
import edu.isep.animo_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FarmRepository extends JpaRepository<Farm, Long> {



}
