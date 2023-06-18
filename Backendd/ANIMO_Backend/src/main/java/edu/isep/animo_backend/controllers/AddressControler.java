package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.models.Address;
import edu.isep.animo_backend.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AddressControler {

    @Autowired
    private AddressService service;

    @GetMapping("/addresses")
    public Object getAllAddresses() {
        return service.getAll();
    }

    @GetMapping("/addresses/{id}")
    public Object getAddressById(@PathVariable(name = "id") long id) {
        return service.findById(id);
    }

    //Get address by whole address
    @GetMapping("/addresses/{street}/{number}/{zip}/{city}/{country}")
    public Object getAddressByWholeAddress(@PathVariable(name = "street") String street, @PathVariable(name = "number") String number, @PathVariable(name = "zip") String zip, @PathVariable(name = "city") String city, @PathVariable(name = "country") String country) {
        return service.findByWholeAddress(street, number, zip, city, country);
    }


    @PostMapping("/addresses")
    public Object createAddress(@RequestBody Address address) {
        service.save(address);
        return address;
    }

    @PutMapping("/addresses")
    public Object updateAddress(@RequestBody Address address) {
        service.update(address);
        return address;
    }

    @DeleteMapping("/addresses/{id}")
    public Object deleteAddress(@PathVariable(name = "id") long id) {
        service.deleteById(id);
        return true;
    }
}
