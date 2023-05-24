package edu.isep.animo_backend.services;

import edu.isep.animo_backend.models.Role;
import edu.isep.animo_backend.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService implements IService<Role, Long> {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role findById(Long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public void save(Role role) {
        roleRepository.save(role);
    }

    @Override
    public void update(Role role) {
        roleRepository.save(role);
    }

    @Override
    public boolean deleteById(Long id) {
        roleRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Role> getAll() {
        return roleRepository.findAll();
    }




}
