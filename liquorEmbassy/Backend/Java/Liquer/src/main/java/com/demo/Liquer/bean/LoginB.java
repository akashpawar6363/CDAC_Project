package com.demo.Liquer.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="Credential")
public class LoginB {
	
@Id	
private String username;

private String password;
private String user_type;

public LoginB() {
	super();
}
public LoginB(String username, String password, String user_type) {
	super();
	this.username = username;
	this.password = password;
	this.user_type = user_type;
}

public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getUser_type() {
	return user_type;
}
public void setUser_type(String user_type) {
	this.user_type = user_type;
}
@Override
public String toString() {
	return "LoginB [username=" + username + ", password=" + password + ", UserType=" + user_type + "]";
}



}
