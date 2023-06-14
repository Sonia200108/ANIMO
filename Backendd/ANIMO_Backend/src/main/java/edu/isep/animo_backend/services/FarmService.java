package edu.isep.animo_backend.services;

import edu.isep.animo_backend.models.Farm;
import edu.isep.animo_backend.repositories.FarmRepository;
import edu.isep.animo_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmService implements IService<Farm, Long>{

    @Autowired
    private FarmRepository farmRepository;

    @Override
    public Farm findById(Long id) {
        return farmRepository.findById(id).get();
    }


    @Override
    public void save(Farm farm) {
        farmRepository.save(farm);
    }

    @Override
    public void update(Farm farm) {
        farmRepository.save(farm);
    }

    @Override
    public boolean deleteById(Long id) {
        farmRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Farm> getAll() {
        return farmRepository.findAll();
    }
}
