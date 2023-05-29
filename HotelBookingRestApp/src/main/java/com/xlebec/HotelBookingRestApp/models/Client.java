package com.xlebec.HotelBookingRestApp.models;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Set;

@Entity
@Table(name = "client")
public class Client {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    @NotEmpty(message = "Имя не должно быть пустым")
    private String name;

    @Column(name = "email")
    @Email(message = "Почта должна соответствовать формату")
    private String email;

    @Column(name = "phone")
    @NotEmpty(message = "Номер не должен быть пустым")
    private String phoneNumber;

    @Column(name = "gender")
    @NotNull(message = "Пол не выбран")
    private Boolean gender;

    public String getPassword() {
        return password;
    }

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;


    public Integer getId() {
        return id;
    }

    public Client() {

    }

    public Client(String name, String email, String phoneNumber, boolean gender, String password,
                  String role) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.password = password;
        this.role = role;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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


    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}