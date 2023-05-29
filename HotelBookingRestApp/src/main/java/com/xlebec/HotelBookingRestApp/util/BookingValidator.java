package com.xlebec.HotelBookingRestApp.util;

import com.xlebec.HotelBookingRestApp.models.Booking;
import com.xlebec.HotelBookingRestApp.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.List;
import java.util.Optional;

@Component
public class BookingValidator implements Validator {

    private final BookingService bookingService;

    @Autowired
    public BookingValidator(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return Booking.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors){
        Booking booking = (Booking) o;
        if (booking.getArrivalDate().after(booking.getDepartureDate()))
            errors.rejectValue("arrivalDate", "Wrong date");
        Optional<Booking> startDate = bookingService.getBookedInDateForRoom(booking.getArrivalDate(), booking.getRoom().getId());
        if (startDate.isPresent())
            errors.rejectValue("arrivalDate", "Room is already booked for this time");
        Optional<Booking> endDate = bookingService.getBookedInDateForRoom(booking.getDepartureDate(), booking.getRoom().getId());
        if (endDate.isPresent())
            errors.rejectValue("departureDate", "Room is already booked for this time");
    }
}
