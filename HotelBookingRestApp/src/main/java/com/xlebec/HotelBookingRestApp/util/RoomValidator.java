package com.xlebec.HotelBookingRestApp.util;

import com.xlebec.HotelBookingRestApp.models.Room;
import com.xlebec.HotelBookingRestApp.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class RoomValidator implements Validator {



    private final RoomService roomService;

    @Autowired
    public RoomValidator(RoomService roomService) {
        this.roomService = roomService;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return Room.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        Room room = (Room) o;
        if (roomService.findById(room.getId()).isPresent())
            errors.rejectValue("id", "Room number is already exists");
    }
}
