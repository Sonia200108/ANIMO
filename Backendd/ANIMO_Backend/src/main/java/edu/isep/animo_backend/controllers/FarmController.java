package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.models.Farm;
import edu.isep.animo_backend.services.FarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class FarmController {

    @Autowired
    private FarmService service;

    @GetMapping("/farms")
    public Object getAllFarms() {
        return service.getAll();
    }

    @GetMapping("/farms/{id}")
    public Object getFarmById(@PathVariable(name = "id") long id) {
        return service.findById(id);
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

}
