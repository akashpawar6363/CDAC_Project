package com.demo.Liquer.bean;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CartOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long OrderId;
	private String userId;
	private double total;
	private String products;
	private String Payment;

	public CartOrder() {
		super();
	}

	public CartOrder(Long orderId, String userId, double total, String products, String payment) {
		super();
		OrderId = orderId;
		this.userId = userId;
		this.total = total;
		this.products = products;
		Payment = payment;
	}

	public Long getOrderId() {
		return OrderId;
	}

	public void setOrderId(Long orderId) {
		OrderId = orderId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public String getProducts() {
		return products;
	}

	public void setProducts(String products) {
		this.products = products;
	}

	public String getPayment() {
		return Payment;
	}

	public void setPayment(String payment) {
		Payment = payment;
	}

	@Override
	public String toString() {
		return "CartOrder [OrderId=" + OrderId + ", userId=" + userId + ", total=" + total + ", products=" + products
				+ ", Payment=" + Payment + "]";
	}

}
