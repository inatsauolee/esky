package com.esky.security;

import java.util.List;
import java.util.stream.Collectors;

import com.esky.model.entities.Authority;
import com.esky.model.entities.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getId(),
                user.getUsername(),
                user.getFirstname(),
                user.getLastname(),
                user.getStatus(),
                user.getEmail(),
                user.getLang(),
                user.getRole(),
                user.getEnabled(),
                user.getPassword(),
                user.getPreferences(),
                user.getLastPasswordResetDate(),
                mapToGrantedAuthorities(user.getAuthorities())
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
        return authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName().name()))
                .collect(Collectors.toList());
    }
}
