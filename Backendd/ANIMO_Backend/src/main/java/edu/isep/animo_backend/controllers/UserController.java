package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.models.User;
import edu.isep.animo_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public Object getAllUsers() {
        return service.getAll();
    }

    @GetMapping("/users/{id}")
    public Object getUserById(@PathVariable(name = "id") long id) {
        return service.findById(id);
    }

    @PostMapping("/users")
    public Object createUser(@RequestBody User user) {
        service.save(user);
        return user;
    }

    @PutMapping("/users")
    public Object updateUser(@RequestBody User user) {
        service.update(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public Object deleteUser(@PathVariable(name = "id") long id) {
        service.deleteById(id);
        return true;
    }
}
