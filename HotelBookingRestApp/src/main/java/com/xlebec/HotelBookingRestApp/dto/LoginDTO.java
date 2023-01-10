package com.xlebec.HotelBookingRestApp.dto;

import javax.validation.constraints.NotEmpty;

public class LoginDTO {

    @NotEmpty
    private String emailOrPhone;

    @NotEmpty
    private String password;

    public String getEmailOrPhone() {
        return emailOrPhone;
    }

    public void setEmailOrPhone(String emailOrPhone) {
        this.emailOrPhone = emailOrPhone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
