package com.demo.Liquer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Liquer.bean.Orders;
import com.demo.Liquer.service.CustomerOrdersService;

@CrossOrigin(origins= "*")
@RestController
public class CustomerOrders {
	@Autowired
	private CustomerOrdersService customerOrdersService;

	@GetMapping("/orders")
	public ResponseEntity<List<Orders>> getCustomerOrders() {

		return ResponseEntity.ok(customerOrdersService.getCustomerOrders());

	}
 @DeleteMapping("/orders/{id}")
 public ResponseEntity<String> sendOrdersForDelivery(@PathVariable int id)
 {  int num=customerOrdersService.sendOrder(id);
 if(num==1)
	return ResponseEntity.ok("ok"); 
 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
 }
}
