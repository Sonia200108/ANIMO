package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.models.Blimp;
import edu.isep.animo_backend.services.BlimpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BlimpController {

    @Autowired
    private BlimpService service;

    @GetMapping("/blimps")
    public Object getAllBlimps() {
        return service.getAll();
    }

    @GetMapping("/blimps/{id}")
    public Object getBlimpById(@PathVariable(name = "id") long id) {
        return service.findById(id);
    }

    @PostMapping("/blimps")
    public Object createBlimp(@RequestBody Blimp blimp) {
        service.save(blimp);
        return blimp;
    }

    @PutMapping("/blimps")
    public Object updateBlimp(@RequestBody Blimp blimp) {
        service.update(blimp);
        return blimp;
    }

    @DeleteMapping("/blimps/{id}")
    public Object deleteBlimp(@PathVariable(name = "id") long id) {
        service.deleteById(id);
        return true;
    }

    @GetMapping("/blimps/farm/{id}")
    public Object getBlimpByFarmId(@PathVariable(name = "id") long id) {
        return service.findByFarmId(id);
    }

}
