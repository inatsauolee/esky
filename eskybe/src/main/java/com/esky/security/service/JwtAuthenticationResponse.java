package com.esky.security.service;

import java.io.Serializable;

import com.esky.model.entities.User;

/**
 * Created by stephan on 20.03.16.
 */
public class JwtAuthenticationResponse implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;
    private final User currentUser;

    public JwtAuthenticationResponse(String token, User currentUser) {
        this.token = token;
        this.currentUser = currentUser;
    }

    public String getToken() {
        return this.token;
    }

	public User getCurrentUser() {
		return currentUser;
	} 
}
