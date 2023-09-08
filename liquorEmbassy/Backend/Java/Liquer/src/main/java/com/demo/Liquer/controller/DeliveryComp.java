package com.demo.Liquer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Liquer.bean.Delivery;
import com.demo.Liquer.service.DeliveryService;

@CrossOrigin(origins= "*")
@RestController
public class DeliveryComp {
	@Autowired 
	private DeliveryService deliveryservice;
	@GetMapping("/delivery")
	public  ResponseEntity<List<Delivery>> getAllDelivery()
	{
		
	return ResponseEntity.ok(deliveryservice.getDeliveryData());
	}
	@DeleteMapping("/delivery/{id}")
	public ResponseEntity<String> clearDelivery(@PathVariable String id)
	{ int num=deliveryservice.clearDeliveryRecords(Integer.parseInt(id.substring(1,id.length()-1)));
     System.out.println(num);
	if(num==1)
		return ResponseEntity.ok("Succesfully complete");
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("try agian");
	}
}
