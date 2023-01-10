package com.xlebec.HotelBookingRestApp.controllers;

import com.xlebec.HotelBookingRestApp.dto.ClientDTO;
import com.xlebec.HotelBookingRestApp.dto.HotelDTO;
import com.xlebec.HotelBookingRestApp.models.Client;
import com.xlebec.HotelBookingRestApp.models.Hotel;
import com.xlebec.HotelBookingRestApp.services.HotelService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

import static com.xlebec.HotelBookingRestApp.util.ErrorsUtil.returnErrorsToClient;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    private final HotelService hotelService;

    private final ModelMapper modelMapper;

    public HotelController(HotelService hotelService, ModelMapper modelMapper) {
        this.hotelService = hotelService;
        this.modelMapper = modelMapper;
    }

    @GetMapping()
    public List<HotelDTO> getHotels(){
        return hotelService.findAll().stream().map(this::convertToHotelDTO).collect(Collectors.toList());
    }

    @PostMapping()
    public ResponseEntity<HttpStatus> register(@RequestBody @Valid HotelDTO hotelDTO) {
        Hotel hotel = convertToHotel(hotelDTO);
        hotelService.save(hotel);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteClient(@PathVariable Integer id){
        hotelService.deleteById(id);
    }

    private HotelDTO convertToHotelDTO(Hotel hotel){
        return modelMapper.map(hotel, HotelDTO.class);
    }

    private Hotel convertToHotel(HotelDTO hotelDTO){
        return modelMapper.map(hotelDTO, Hotel.class);
    }

}
