package com.serviceportal.backend.controller;

import com.serviceportal.backend.entity.ServiceRequest;
import com.serviceportal.backend.repository.ServiceRequestRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/request")
public class ServiceRequestController {

    private final ServiceRequestRepository repository;

    public ServiceRequestController(ServiceRequestRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ServiceRequest createRequest(
            @RequestBody ServiceRequest request) {

        request.setStatus("OFFEN");
        request.setCreatedAt(LocalDateTime.now());

        return repository.save(request);
    }

    @GetMapping
    public List<ServiceRequest> getAllRequests() {
        return repository.findAll();
    }

    @PutMapping("/{id}/status")
    public ServiceRequest updateStatus(@PathVariable Long id) {

    ServiceRequest request = repository.findById(id)
            .orElseThrow();

    request.setStatus("BEARBEITET");

    return repository.save(request);
    }
}