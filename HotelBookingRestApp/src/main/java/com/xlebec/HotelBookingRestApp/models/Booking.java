package com.xlebec.HotelBookingRestApp.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;


@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "date_in")
    @NotNull(message = "Дата заезда не должна быть пустой")
    private Date arrivalDate;

    @Column(name = "date_out")
    @NotNull(message = "Дата выезда не должна быть пустой")
    private Date departureDate;

    @Column(name = "price")
    private Double bookingPrice;


    @NotNull
    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Client client;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Room room;

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    @NotNull
    @Column(name = "hotel_name")
    private String hotelName;

    public Booking() {

    }

    public Booking(Date arrivalDate, Date departureDate, Double bookingPrice, Client client, Room room, String hotelName) {
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.bookingPrice = bookingPrice;
        this.client = client;
        this.room = room;
        this.hotelName = hotelName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(Date arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    public Double getBookingPrice() {
        return bookingPrice;
    }

    public void setBookingPrice(Double bookingPrice) {
        this.bookingPrice = bookingPrice;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}