package edu.isep.animo_backend.services;

import edu.isep.animo_backend.models.Farm;
import edu.isep.animo_backend.models.User;
import edu.isep.animo_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IService<User, Long>{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).get();
    }
    public List<User> getUsersByFarmId(Long farmId) {
        return userRepository.findByFarmId(farmId);
    }
    public Object getFarmByUserId(Long userId) {
        return userRepository.findFarmByUserId(userId);
    }
    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public void update(User user) {
        userRepository.save(user);
    }

    @Override
    public boolean deleteById(Long id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

}
