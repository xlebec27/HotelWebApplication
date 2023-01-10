package com.xlebec.HotelBookingRestApp.services;

import com.xlebec.HotelBookingRestApp.models.Room;
import com.xlebec.HotelBookingRestApp.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }

    public List<Room> findAll(){
        return roomRepository.findAll();
    }

    public List<Room> findByHotelId(Integer id){
        return roomRepository.findByHotelId(id);
    }

    public List<Room> findByHotelIdPageable(Integer id, Integer page){
        return roomRepository.findByHotelId(id, PageRequest.of(page, 20));
    }

    public Room findByHotelIdAndRoomNumber(Integer id, Integer room){
        return roomRepository.findByHotelIdAndRoomNumber(id, room);
    }

    @Transactional
    public void save(Room roomToAdd) {roomRepository.save(roomToAdd);
    }

    @Transactional
    public void deleteById(Integer id) {roomRepository.deleteById(id);
    }

    @Transactional
    public void deleteByHotelIdAndNumber(Integer hotelId, Integer number) {
        roomRepository.deleteByHotelIdAndRoomNumber(hotelId, number);
    }
}
