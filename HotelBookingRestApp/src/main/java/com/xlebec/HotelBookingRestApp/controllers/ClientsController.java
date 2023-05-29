package com.xlebec.HotelBookingRestApp.controllers;

import com.xlebec.HotelBookingRestApp.dto.ClientDTO;
import com.xlebec.HotelBookingRestApp.dto.LoginDTO;
import com.xlebec.HotelBookingRestApp.models.Client;
import com.xlebec.HotelBookingRestApp.services.ClientService;
import com.xlebec.HotelBookingRestApp.util.ClientValidator;
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
@RequestMapping("/clients")
public class ClientsController {

    private final ClientValidator clientValidator;
    private final ClientService clientService;
    private final ModelMapper modelMapper;

    @Autowired
    public ClientsController(ClientValidator clientValidator, ClientService clientService, ModelMapper modelMapper){
        this.clientValidator = clientValidator;
        this.clientService = clientService;
        this.modelMapper = modelMapper;
    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<HttpStatus> register(@RequestBody @Valid ClientDTO clientDTO,
                                                   BindingResult bindingResult) {
        Client clientToAdd = modelMapper.map(clientDTO, Client.class);
        clientValidator.validate(clientToAdd, bindingResult);
        if (bindingResult.hasErrors())
            returnErrorsToClient(bindingResult);
        clientService.register(clientToAdd);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<HttpStatus> register(@RequestBody @Valid LoginDTO loginDTO,
                                               BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            returnErrorsToClient(bindingResult);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ClientDTO getClient(@PathVariable("id") Integer id){
        return modelMapper.map(clientService.findById(id), ClientDTO.class);
    }

    @CrossOrigin
    @GetMapping
    public List<ClientDTO> getClients(){
        return clientService.findAll().stream().map(this::convertToClientDTO).collect(Collectors.toList());
    }

    private ClientDTO convertToClientDTO(Client client){
        return modelMapper.map(client, ClientDTO.class);
    }

    @CrossOrigin
    @DeleteMapping(value = "/{name}")
    public void deleteClient(@PathVariable String name){
        clientService.deleteByName(name);
    }

}
