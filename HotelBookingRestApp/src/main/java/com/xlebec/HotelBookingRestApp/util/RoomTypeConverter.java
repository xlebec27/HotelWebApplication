package com.xlebec.HotelBookingRestApp.util;

import com.xlebec.HotelBookingRestApp.models.RoomType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class RoomTypeConverter implements AttributeConverter<RoomType, String> {

    @Override
    public String convertToDatabaseColumn(RoomType roomType){
        if (roomType==null){
            return null;
        }
        return roomType.getCode();
    }

    @Override
    public RoomType convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        }

        return Stream.of(RoomType.values())
                .filter(c -> c.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
