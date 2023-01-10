package com.xlebec.HotelBookingRestApp.dto;

import com.xlebec.HotelBookingRestApp.models.Hotel;
import com.xlebec.HotelBookingRestApp.models.RoomType;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class RoomDTO {

    @NotNull
    @Min(1)
    private Integer roomNumber;

    @NotNull
    private String hotelName;

    @NotNull
    private RoomType roomType;

    @NotNull
    @Min(1)
    private Integer numberOfBeds;

    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    public Integer getNumberOfBeds() {
        return numberOfBeds;
    }

    public void setNumberOfBeds(Integer numberOfBeds) {
        this.numberOfBeds = numberOfBeds;
    }
}
