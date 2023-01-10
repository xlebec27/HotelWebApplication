package com.xlebec.HotelBookingRestApp.services;

import com.xlebec.HotelBookingRestApp.models.Client;
import com.xlebec.HotelBookingRestApp.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }

    public Optional<Client> findByName(String name){
        return clientRepository.findByName(name);
    }

    public Optional<Client> findById(Integer id){
        return clientRepository.findById(id);
    }

    public Optional<Client> findByEmailOrPhone(String email, String phone){
        return clientRepository.findByEmailOrPhoneNumber(email, phone);
    }

    public List<Client> findAll(){
        return clientRepository.findAll();
    }

    @Transactional
    public void deleteByName(String name){
        clientRepository.deleteByName(name);
    }

    @Transactional
    public void register(Client client){
        clientRepository.save(client);
    }
}
