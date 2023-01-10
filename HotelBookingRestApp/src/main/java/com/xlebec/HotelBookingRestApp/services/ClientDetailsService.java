//package com.xlebec.HotelBookingRestApp.services;
//
//import com.xlebec.HotelBookingRestApp.models.Client;
//import com.xlebec.HotelBookingRestApp.repositories.ClientRepository;
//import com.xlebec.HotelBookingRestApp.security.ClientDetails;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class ClientDetailsService implements UserDetailsService {
//
//    private final ClientRepository clientRepository;
//
//    @Autowired
//    public ClientDetailsService(ClientRepository clientRepository) {
//        this.clientRepository = clientRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
//        Optional<Client> person = clientRepository.findByName(s);
//
//        if (person.isEmpty())
//            throw new UsernameNotFoundException("User not found");
//
//        return new ClientDetails(person.get());
//    }
//}
