//package com.xlebec.HotelBookingRestApp.security;
//
//import com.xlebec.HotelBookingRestApp.models.Client;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.Collection;
//
//public class ClientDetails implements UserDetails {
//    private final Client client;
//
//    public ClientDetails(Client client) {
//        this.client = client;
//    }
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        // SHOW_ACCOUNT, WITHDRAW_MONEY, SEND_MONEY
//        // ROLE_ADMIN, ROLE_USER - это роли
//        return null;
//    }
//
//    @Override
//    public String getPassword() {
//        return this.client.getPassword();
//    }
//
//    @Override
//    public String getUsername() {
//        return this.client.getName();
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//
//    // Нужно, чтобы получать данные аутентифицированного пользователя
//    public Client getClient() {
//        return this.client;
//    }
//}
