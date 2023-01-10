package com.xlebec.HotelBookingRestApp.controllers;

import com.xlebec.HotelBookingRestApp.dto.BookingDTO;
import com.xlebec.HotelBookingRestApp.dto.RoomDTO;
import com.xlebec.HotelBookingRestApp.models.Booking;
import com.xlebec.HotelBookingRestApp.models.Room;
import com.xlebec.HotelBookingRestApp.services.HotelService;
import com.xlebec.HotelBookingRestApp.services.RoomService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

import static com.xlebec.HotelBookingRestApp.util.ErrorsUtil.returnErrorsToClient;

@RestController
@RequestMapping("/rooms")
public class RoomsController {

    private final RoomService roomService;

    private final HotelService hotelService;
    private final ModelMapper modelMapper;

    @Autowired
    public RoomsController(RoomService roomService, HotelService hotelService, ModelMapper modelMapper) {
        this.roomService = roomService;
        this.hotelService = hotelService;
        this.modelMapper = modelMapper;
    }

    @GetMapping()
    public List<RoomDTO> getRooms(){
        return roomService.findAll().stream().map(this::convertToRoomDTO).collect(Collectors.toList());
    }

    @CrossOrigin
    @GetMapping(value = "/hotel/{name}")
    public List<RoomDTO> getRoomsInHotel(@PathVariable String name, @RequestParam("page") Integer page){
        return roomService.findByHotelIdPageable(hotelService.findIdByName(name), page).
                stream().map(this::convertToRoomDTO).collect(Collectors.toList());
    }

    @GetMapping(value = "/hotel/{name}/{room}")
    public RoomDTO getRoomInHotelByNumber(@PathVariable String name, @PathVariable Integer room){
        return convertToRoomDTO(roomService.findByHotelIdAndRoomNumber(hotelService.findIdByName(name), room));

    }

    @GetMapping(value = "/hotelrooms/{id}")
    public List<RoomDTO> getRoomsByHotelID(@PathVariable Integer id){
        return roomService.findByHotelId(id).stream().map(this::convertToRoomDTO).collect(Collectors.toList());
    }

    @PostMapping()
    public ResponseEntity<HttpStatus> book(@RequestBody @Valid RoomDTO roomDTO) {
        Room roomToAdd = modelMapper.map(roomDTO, Room.class);
        roomToAdd.setHotel(hotelService.findByName(roomDTO.getHotelName()));
        roomService.save(roomToAdd);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{hotelName}/{number}")
    public void deleteRoom(@PathVariable String hotelName, @PathVariable Integer number){
        roomService.deleteByHotelIdAndNumber(hotelService.findIdByName(hotelName), number);
    }

    private RoomDTO convertToRoomDTO(Room room){
        return modelMapper.map(room, RoomDTO.class);
    }
}
