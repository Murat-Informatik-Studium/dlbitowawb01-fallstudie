package com.serviceportal.backend.config;

import com.serviceportal.backend.entity.ServiceOffer;
import com.serviceportal.backend.repository.ServiceOfferRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ServiceOfferRepository serviceOfferRepository;

    public DataInitializer(ServiceOfferRepository serviceOfferRepository) {
        this.serviceOfferRepository = serviceOfferRepository;
    }

    @Override
    public void run(String... args) {

        if (serviceOfferRepository.count() == 0) {

            ServiceOffer serviceA = new ServiceOffer();
            serviceA.setTitle("Service A");
            serviceA.setDescription("Allgemeine Anfrage");

            ServiceOffer serviceB = new ServiceOffer();
            serviceB.setTitle("Service B");
            serviceB.setDescription("Dokument beantragen");

            ServiceOffer serviceC = new ServiceOffer();
            serviceC.setTitle("Service C");
            serviceC.setDescription("Termin vereinbaren");

            serviceOfferRepository.save(serviceA);
            serviceOfferRepository.save(serviceB);
            serviceOfferRepository.save(serviceC);
        }
    }
}