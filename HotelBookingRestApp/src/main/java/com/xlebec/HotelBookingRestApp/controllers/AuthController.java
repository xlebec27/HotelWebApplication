//package com.xlebec.HotelBookingRestApp.controllers;
//
//import com.xlebec.HotelBookingRestApp.dto.ClientDTO;
//import com.xlebec.HotelBookingRestApp.dto.AuthenticationDTO;
//import com.xlebec.HotelBookingRestApp.models.Client;
//import com.xlebec.HotelBookingRestApp.security.JWTUtil;
//import com.xlebec.HotelBookingRestApp.services.RegistrationService;
//import com.xlebec.HotelBookingRestApp.util.ClientValidator;
//import org.modelmapper.ModelMapper;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.validation.Valid;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/auth")
//public class AuthController {
//
//    private final RegistrationService registrationService;
//    private final ModelMapper modelMapper;
//    private final JWTUtil jwtUtil;
//    private final ClientValidator clientValidator;
//    private final AuthenticationManager authenticationManager;
//
//    public AuthController(RegistrationService registrationService, ModelMapper modelMapper,
//                          JWTUtil jwtUtil, ClientValidator clientValidator,
//                          AuthenticationManager authenticationManager) {
//        this.registrationService = registrationService;
//        this.modelMapper = modelMapper;
//        this.jwtUtil = jwtUtil;
//        this.clientValidator = clientValidator;
//        this.authenticationManager = authenticationManager;
//    }
//
//    @PostMapping("/registration")
//    public Map<String, String> performRegistration(@RequestBody @Valid ClientDTO clientDTO,
//                                                   BindingResult bindingResult) {
//        Client client = convertToClient(clientDTO);
//
//        clientValidator.validate(client, bindingResult);
//
//        if (bindingResult.hasErrors()) {
//            return Map.of("message", "Ошибка!");
//        }
//
//        registrationService.register(client);
//
//        String token = jwtUtil.generateToken(client.getName());
//        return Map.of("jwt-token", token);
//    }
//
//    @PostMapping("/login")
//    public Map<String, String> performLogin(@RequestBody AuthenticationDTO authenticationDTO) {
//        UsernamePasswordAuthenticationToken authInputToken =
//                new UsernamePasswordAuthenticationToken(authenticationDTO.getUsername(),
//                        authenticationDTO.getPassword());
//
//        try {
//            authenticationManager.authenticate(authInputToken);
//        } catch (BadCredentialsException e) {
//            return Map.of("message", "Incorrect credentials!");
//        }
//
//        String token = jwtUtil.generateToken(authenticationDTO.getUsername());
//        return Map.of("jwt-token", token);
//    }
//
//    public Client convertToClient(ClientDTO clientDTO) {
//        return this.modelMapper.map(clientDTO, Client.class);
//    }
//}
