package com.demo.Liquer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Liquer.bean.RegisterUser;
import com.demo.Liquer.service.RegisterUsersService;

@CrossOrigin(origins= "*")
@RestController
public class RegisterController
{
	@Autowired
	private RegisterUsersService registerUsersService;
    @PostMapping("/registerUser")
    public ResponseEntity<String> addUser(@RequestBody RegisterUser user)
{
    int num=registerUsersService.Adduser(user);
    if(num==1)
    	return ResponseEntity.ok("register complete");
    else if(num==2)
    	
     	return ResponseEntity.status(HttpStatus.CONFLICT).body("already register user");
    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid data");
    	
	
}
}
