package com.serviceportal.backend.repository;

import com.serviceportal.backend.entity.ServiceOffer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceOfferRepository
        extends JpaRepository<ServiceOffer, Long> {
}