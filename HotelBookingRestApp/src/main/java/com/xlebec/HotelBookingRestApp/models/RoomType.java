package com.xlebec.HotelBookingRestApp.models;

//@Entity
//@Table(name = "room_type")
public enum RoomType {
    STANDARD("S"), STUDIO("T"), BUSINESS("B"), LUX("X"), PRESIDENTIAL("P");


    //@Id
    //@Column(name = "id")
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //private Integer id;

    //@NotEmpty
    //@Column(name = "name")
    private String code;


    private RoomType(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }


//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
}
