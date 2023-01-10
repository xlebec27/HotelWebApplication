package com.xlebec.HotelBookingRestApp.services;

import com.xlebec.HotelBookingRestApp.models.Hotel;
import com.xlebec.HotelBookingRestApp.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class HotelService {

    private final HotelRepository hotelRepository;

    @Autowired
    public HotelService(HotelRepository hotelRepository){
        this.hotelRepository = hotelRepository;
    }

    public List<Hotel> findAll(){
        return hotelRepository.findAll();
    }

    public Hotel findByName(String name){
        return hotelRepository.findByName(name);
    }

    public Integer findIdByName(String name){
        return hotelRepository.findByName(name).getId();
    }

    @Transactional
    public void save(Hotel hotel){ hotelRepository.save(hotel);}

    @Transactional
    public void deleteById(Integer id){hotelRepository.deleteById(id);}

}
