package com.serviceportal.backend.controller;

import com.serviceportal.backend.entity.ServiceOffer;
import com.serviceportal.backend.repository.ServiceOfferRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/services")
public class ServiceOfferController {

    private final ServiceOfferRepository repository;

    public ServiceOfferController(ServiceOfferRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ServiceOffer> getAllServices() {
        return repository.findAll();
    }

    @PostMapping
    public ServiceOffer createService(@RequestBody ServiceOffer serviceOffer) {
        return repository.save(serviceOffer);
    }
}