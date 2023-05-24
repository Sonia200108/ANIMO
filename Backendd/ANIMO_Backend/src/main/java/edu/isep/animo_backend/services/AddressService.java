package edu.isep.animo_backend.services;

import edu.isep.animo_backend.models.Address;
import edu.isep.animo_backend.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService implements IService<Address, Long> {

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address findById(Long id) {
        return addressRepository.findById(id).get();
    }

    @Override
    public void save(Address address) {
        addressRepository.save(address);
    }

    @Override
    public void update(Address address) {
        addressRepository.save(address);
    }

    @Override
    public boolean deleteById(Long id) {
        addressRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Address> getAll() {
        return addressRepository.findAll();
    }
}
