package com.demo.Liquer.bean;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RegisterUser")


public class RegisterUser 
{
@Id
private String  username;

private String  password;

private String email;

private String dob;

private String mob_number;

private String address;

private int pincode;

private String adhaar_card_number;

private String license_number;
private String user_type;

public RegisterUser() {
	super();
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

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getDob() {
	return dob;
}

public void setDob(String dob) {
	this.dob = dob;
}

public String getMob_number() {
	return mob_number;
}

public void setMob_number(String mob_number) {
	this.mob_number = mob_number;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public int getPincode() {
	return pincode;
}

public void setPincode(int pincode) {
	this.pincode = pincode;
}

public String getAdhaar_card_number() {
	return adhaar_card_number;
}

public void setAdhaar_card_number(String adhaar_card_number) {
	this.adhaar_card_number = adhaar_card_number;
}

public String getLicense_number() {
	return license_number;
}

public void setLicense_number(String license_number) {
	this.license_number = license_number;
}

public String getUser_type() {
	return user_type;
}

public void setUser_type(String user_type) {
	this.user_type = user_type;
}

public RegisterUser(String username, String password, String email, String dob, String mob_number, String address,
		int pincode, String adhaar_card_number, String license_number, String user_type) {
	super();
	this.username = username;
	this.password = password;
	this.email = email;
	this.dob = dob;
	this.mob_number = mob_number;
	this.address = address;
	this.pincode = pincode;
	this.adhaar_card_number = adhaar_card_number;
	this.license_number = license_number;
	this.user_type = user_type;
}

@Override
public String toString() {
	return "RegisterUser [username=" + username + ", password=" + password + ", email=" + email + ", dob=" + dob
			+ ", mob_number=" + mob_number + ", address=" + address + ", pincode=" + pincode + ", adhaar_card_number="
			+ adhaar_card_number + ", license_number=" + license_number + ", user_type=" + user_type + "]";
}

}
