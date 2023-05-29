package com.xlebec.HotelBookingRestApp.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ClientDTO {
    @NotEmpty(message = "Имя не должно быть пустым")
    private String name;

    @Email(message = "Почта должна соответствовать формату")
    private String email;

    @NotEmpty(message = "Номер не должен быть пустым")
    private String phoneNumber;

    @NotNull(message = "Пол не выбран")
    private Boolean gender;


    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
