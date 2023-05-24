package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.models.Role;
import edu.isep.animo_backend.services.RoleService;
import edu.isep.animo_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RoleController {

    @Autowired
    private RoleService service;

    @GetMapping("/roles")
    public Object getAllRoles() {
        return service.getAll();
    }

    @GetMapping("/roles/{id}")
    public Object getRoleById(@PathVariable(name = "id") long id) {
        return service.findById(id);
    }

    @PostMapping("/roles")
    public Object createRole(@RequestBody Role role) {
        service.save(role);
        return role;
    }

    @PutMapping("/roles")
    public Object updateRole(@RequestBody Role role) {
        service.update(role);
        return role;
    }

    @DeleteMapping("/roles/{id}")
    public Object deleteRole(@PathVariable(name = "id") long id) {
        service.deleteById(id);
        return true;
    }
}
