package com.serviceportal.backend.repository;

import com.serviceportal.backend.entity.ServiceRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRequestRepository
        extends JpaRepository<ServiceRequest, Long> {

}