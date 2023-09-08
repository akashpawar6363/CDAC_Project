package com.demo.Liquer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Liquer.bean.LoginB;
import com.demo.Liquer.bean.Product;
import com.demo.Liquer.service.LoginService;
import com.demo.Liquer.service.ProductService;
@CrossOrigin(origins= "*")
@RestController
public class Login
{ 
	@Autowired
	private LoginService loginService;
	
	
	@PostMapping("/Login")
	public ResponseEntity<String> getAllProduct(@RequestBody LoginB c){
	System.out.println("login"+c);
   String type=loginService.verify(c);
		  
		if(type!=null) {
		
			return ResponseEntity.ok(type);
			
		}
		
		
	           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credential");
	}
	

}
