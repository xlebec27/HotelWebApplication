package com.xlebec.HotelBookingRestApp.repositories;

import com.xlebec.HotelBookingRestApp.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    Hotel findByName(String name);

    void deleteByName(String name);
}
