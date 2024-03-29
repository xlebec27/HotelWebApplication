package com.xlebec.HotelBookingRestApp.controllers;

import com.xlebec.HotelBookingRestApp.dto.BookingDTO;
import com.xlebec.HotelBookingRestApp.models.Booking;
import com.xlebec.HotelBookingRestApp.services.BookingService;
import com.xlebec.HotelBookingRestApp.services.ClientService;
import com.xlebec.HotelBookingRestApp.services.HotelService;
import com.xlebec.HotelBookingRestApp.services.RoomService;
import com.xlebec.HotelBookingRestApp.util.BookingValidator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;
import java.util.stream.Collectors;

import static com.xlebec.HotelBookingRestApp.util.ErrorsUtil.returnErrorsToClient;

@RestController
@RequestMapping("/bookings")
public class BookingsController {

    private final BookingService bookingService;

    private final ClientService clientService;

    private final RoomService roomService;

    private final HotelService hotelService;

    private final ModelMapper modelMapper;

    private final BookingValidator bookingValidator;

    @Autowired
    public BookingsController(BookingService bookingService, BookingValidator bookingValidator,
                              ModelMapper modelMapper, ClientService clientService,
                              RoomService roomService, HotelService hotelService) {
        this.bookingService = bookingService;
        this.bookingValidator = bookingValidator;
        this.modelMapper = modelMapper;
        this.clientService = clientService;
        this.roomService = roomService;
        this.hotelService = hotelService;
    }

    @PostMapping("/book")
    public ResponseEntity<HttpStatus> book(@RequestBody @Valid BookingDTO bookingDTO, BindingResult bindingResult) {
        Booking bookingToAdd = convertToBooking(bookingDTO);
        bookingToAdd.setClient(clientService.findByName(bookingDTO.getClientName()).get());
        bookingToAdd.setRoom(roomService.findByHotelIdAndRoomNumber(hotelService.findIdByName(bookingDTO.getHotelName()),
                bookingDTO.getRoomNumber()));
        bookingValidator.validate(bookingToAdd, bindingResult);
        if (bindingResult.hasErrors())
            returnErrorsToClient(bindingResult);
        bookingService.register(bookingToAdd);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public BookingDTO getBooking(@PathVariable("id") Integer id){
        return convertToBookingDTO(bookingService.findById(id).get());
    }

    @DeleteMapping(value = "/{id}")
    public void deleteBooking(@PathVariable Integer id){
        bookingService.deleteById(id);
    }

    @GetMapping(value = "/byclient/{id}")
    public List<BookingDTO> getBookingsByClient(@PathVariable("id") String name){
        return bookingService.findByClientId(clientService.findByName(name).get().getId()).stream().map(this::convertToBookingDTO).collect(Collectors.toList());
    }

    private BookingDTO convertToBookingDTO(Booking booking) {
        BookingDTO bookingToGet = modelMapper.map(booking, BookingDTO.class);
        bookingToGet.setHotelName(booking.getRoom().getHotel().getName());
        return bookingToGet;
    }

    private Booking convertToBooking(BookingDTO bookingDTO) {
        return modelMapper.map(bookingDTO, Booking.class);
    }
}
