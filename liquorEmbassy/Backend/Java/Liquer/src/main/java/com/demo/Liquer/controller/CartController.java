package com.demo.Liquer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Liquer.bean.CartOrder;
import com.demo.Liquer.bean.MyOrder;
import com.demo.Liquer.bean.Orders;
import com.demo.Liquer.bean.Product;
import com.demo.Liquer.service.CartOrdersService;
import com.demo.Liquer.service.CartService;
import com.demo.Liquer.service.ProductService;

@CrossOrigin(origins= "*")
@RestController
public class CartController 
{
@Autowired
private  CartService cartservice;
@Autowired 
private ProductService productservice;
@Autowired
private CartOrdersService cartOrdersService;



@PostMapping("/getAll")
public  ResponseEntity<List<Product>> getAllProduct()
{
	List<Product> productList=productservice.getProducts();
	
return ResponseEntity.ok(productList);
}
@PostMapping("/submitOrder")
public ResponseEntity<String> addOrder1(@RequestBody CartOrder order)
{ 
int num =cartOrdersService.saveOrder(order);
int num1=cartOrdersService.insertToMyOrder(order);
if(num==1 && num1==1)
	return ResponseEntity.ok("Complete");
return ResponseEntity.badRequest().body("Invalid");
}

@GetMapping("/getmyorder/{id}")
public ResponseEntity<?> myOrders(@PathVariable String id){
  System.out.println(id);
	List<MyOrder> orders=cartOrdersService.getMyOrder(id);
	if(orders!=null)
	return ResponseEntity.ok(orders);
return ResponseEntity.badRequest().body("Issue");

}

}
