package com.xlebec.HotelBookingRestApp.repositories;

import com.xlebec.HotelBookingRestApp.models.Booking;
import com.xlebec.HotelBookingRestApp.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Integer > {

    Optional<Booking> findById(Integer id);
    List<Booking> findByClientId(Integer client_id);

    Optional<Booking> findByArrivalDateLessThanEqualAndDepartureDateGreaterThanEqualAndRoomId(
            Date date, Date dateCopy, Integer id
    );

}
