package com.xlebec.HotelBookingRestApp.util;

import com.xlebec.HotelBookingRestApp.models.Client;
import com.xlebec.HotelBookingRestApp.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class ClientValidator implements Validator {

    private final ClientService clientService;

    @Autowired
    public ClientValidator(ClientService clientService){
        this.clientService = clientService;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return Client.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        Client client = (Client) o;

        if (clientService.findByName(client.getName()).isPresent())
            errors.rejectValue("name", "Такой человек уже зарегистрирован");
        if (clientService.findByEmailOrPhone(client.getEmail(), client.getPhoneNumber()).isPresent())
            errors.rejectValue("name", "На данную почту или телефон уже зарегистрирован человек");
    }

}
