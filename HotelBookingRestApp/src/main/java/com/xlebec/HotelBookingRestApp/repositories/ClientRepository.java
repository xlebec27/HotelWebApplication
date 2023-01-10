package com.xlebec.HotelBookingRestApp.repositories;

import com.xlebec.HotelBookingRestApp.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Integer> {
    Optional<Client> findByName(String name);


    void deleteByName(String name);

    Optional<Client> findByEmailOrPhoneNumber(String email, String phone);

    //Optional<Client> findById(Integer id);
}
