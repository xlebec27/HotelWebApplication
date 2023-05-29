package com.xlebec.HotelBookingRestApp.controllers;

import com.xlebec.HotelBookingRestApp.dto.ClientDTO;
import com.xlebec.HotelBookingRestApp.dto.AuthenticationDTO;
import com.xlebec.HotelBookingRestApp.models.Client;
import com.xlebec.HotelBookingRestApp.security.JWTUtil;
import com.xlebec.HotelBookingRestApp.services.ClientService;
import com.xlebec.HotelBookingRestApp.services.RegistrationService;
import com.xlebec.HotelBookingRestApp.util.ClientValidator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final RegistrationService registrationService;
    private final ModelMapper modelMapper;
    private final JWTUtil jwtUtil;
    private final ClientValidator clientValidator;
    private final AuthenticationManager authenticationManager;

    private final ClientService clientService;

    @Autowired
    public AuthController(RegistrationService registrationService, ModelMapper modelMapper,
                          JWTUtil jwtUtil, ClientValidator clientValidator,
                          AuthenticationManager authenticationManager,
                          ClientService clientService) {
        this.registrationService = registrationService;
        this.modelMapper = modelMapper;
        this.jwtUtil = jwtUtil;
        this.clientValidator = clientValidator;
        this.authenticationManager = authenticationManager;
        this.clientService = clientService;
    }

    @CrossOrigin
    @PostMapping("/registration")
    public Map<String, String> performRegistration(@RequestBody @Valid ClientDTO clientDTO,
                                                   BindingResult bindingResult) {
        Client client = convertToClient(clientDTO);

        clientValidator.validate(client, bindingResult);

        if (bindingResult.hasErrors()) {
            return Map.of("message", "Wrong User Details");
        }

        registrationService.register(client);

        String token = jwtUtil.generateToken(client.getName());
        return Map.of("jwt", token, "username", client.getEmail(),
                "role", "ROLE_USER", "name", client.getName(),
                "phone", client.getPhoneNumber());
    }

    @CrossOrigin
    @PostMapping("/login")
    public Map<String, String> performLogin(@RequestBody AuthenticationDTO authenticationDTO) {
        UsernamePasswordAuthenticationToken authInputToken =
                new UsernamePasswordAuthenticationToken(authenticationDTO.getUsername(),
                        authenticationDTO.getPassword());

        try {
            authenticationManager.authenticate(authInputToken);
        } catch (BadCredentialsException e) {
            return Map.of("message", "Incorrect credentials!");
        }

        String token = jwtUtil.generateToken(authenticationDTO.getUsername());
        Client client = clientService.findByEmail(authenticationDTO.getUsername()).get();
        return Map.of("jwt", token, "username", authenticationDTO.getUsername(),
                "role", client.getRole(),
                "name", client.getName(),
                "phone", client.getPhoneNumber());
    }

    public Client convertToClient(ClientDTO clientDTO) {
        return this.modelMapper.map(clientDTO, Client.class);
    }
}
