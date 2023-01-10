package com.xlebec.HotelBookingRestApp.repositories;

import com.xlebec.HotelBookingRestApp.models.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Integer> {

    List<Room> findByHotelId(Integer hotel_id);

    List<Room> findByHotelId(Integer hotel_id, Pageable var1);

    Room findByHotelIdAndRoomNumber(Integer hotel_id, Integer number);

    @Transactional
    void deleteByHotelIdAndRoomNumber(Integer hotel_id, Integer number);
}
