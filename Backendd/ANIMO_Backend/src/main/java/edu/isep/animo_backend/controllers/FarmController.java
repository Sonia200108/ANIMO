package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.models.Farm;
import edu.isep.animo_backend.models.User;
import edu.isep.animo_backend.services.FarmService;
import edu.isep.animo_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FarmController {

    @Autowired
    private FarmService service;
    @Autowired
    private UserService userService;

    @GetMapping("/farms")
    public Object getAllFarms() {
        return service.getAll();
    }

    @GetMapping("/farms/{id}")
    public Object getFarmById(@PathVariable(name = "id") long id) {
        return service.findById(id);
    }

    //get farm by name
    @GetMapping("/farms/name/{name}")
    public Object getFarmByName(@PathVariable(name = "name") String name) {
        return service.findByName(name);
    }

    @PostMapping("/farms")
    public Object createFarm(@RequestBody Farm farm) {
        service.save(farm);
        return farm;
    }

    @PutMapping("/farms")
    public Object updateFarm(@RequestBody Farm farm) {
        service.update(farm);
        return farm;
    }

    @DeleteMapping("/farms/{id}")
    public Object deleteFarm(@PathVariable(name = "id") long id) {
        service.deleteById(id);
        return true;
    }

    @GetMapping("/farms/{id}/users")
    public List<User> getUsersByFarmId(@PathVariable Long id) {
        List<User> users = userService.getUsersByFarmId(id);
        return users;
    }

}
