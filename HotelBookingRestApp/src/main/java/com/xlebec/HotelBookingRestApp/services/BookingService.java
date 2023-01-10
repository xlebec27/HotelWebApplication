package com.xlebec.HotelBookingRestApp.services;

import com.xlebec.HotelBookingRestApp.models.Booking;
import com.xlebec.HotelBookingRestApp.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class BookingService {

    private final BookingRepository bookingRepository;

    private final ClientService clientService;

    @Autowired
    public BookingService(BookingRepository bookingRepository, ClientService clientService) {
        this.bookingRepository = bookingRepository;
        this.clientService = clientService;
    }

    public Optional<Booking> findById(Integer id){
        return bookingRepository.findById(id);
    }

    public List<Booking> findByClientId(Integer id){
        return bookingRepository.findByClientId(id);
    }

    public List<Booking> findAll(){
        return bookingRepository.findAll();
    }

    @Transactional
    public void register(Booking booking) {
        booking.setClient(clientService.findById(booking.getClient().getId()).get());
        bookingRepository.save(booking);
    }

    @Transactional
    public void deleteById(Integer id) { bookingRepository.deleteById(id);
    }
}
