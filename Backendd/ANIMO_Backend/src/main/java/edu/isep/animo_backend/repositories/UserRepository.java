package edu.isep.animo_backend.repositories;

import edu.isep.animo_backend.models.Farm;
import edu.isep.animo_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFarmId(Long farmId);

    @Query(value = "SELECT f.* FROM tbl_farms f INNER JOIN tbl_users u ON f.id = u.farmid WHERE u.id = ?1", nativeQuery = true)
    Object findFarmByUserId(Long id);
}
