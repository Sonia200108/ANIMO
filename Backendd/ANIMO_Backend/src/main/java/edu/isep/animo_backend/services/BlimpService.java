package edu.isep.animo_backend.services;

import edu.isep.animo_backend.models.Blimp;
import edu.isep.animo_backend.repositories.BlimpRepository;
import edu.isep.animo_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlimpService implements IService<Blimp, Long>{

    @Autowired
    private BlimpRepository blimpRepository;

    @Override
    public Blimp findById(Long id) {
        return blimpRepository.findById(id).get();
    }

    @Override
    public void save(Blimp blimp) {
        blimpRepository.save(blimp);
    }

    @Override
    public void update(Blimp blimp) {
        blimpRepository.save(blimp);
    }

    @Override
    public boolean deleteById(Long id) {
        blimpRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Blimp> getAll() {
        return blimpRepository.findAll();
    }
}
