package com.demo.Liquer.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Orders")
public class Orders {

	@Id
	private int OrderId;
	private String Order_Discription;
   private String UserId;
   private String payment;
   private double Bill_Amount;
   
	public String getUserId() {
	return UserId;
}
	
	
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Orders(int orderId, String order_Discription, String userId, String payment, double bill_Amount) {
		super();
		OrderId = orderId;
		Order_Discription = order_Discription;
		UserId = userId;
		this.payment = payment;
		Bill_Amount = bill_Amount;
	}


	public int getOrderId() {
		return OrderId;
	}


	public void setOrderId(int orderId) {
		OrderId = orderId;
	}


	public String getOrder_Discription() {
		return Order_Discription;
	}


	public void setOrder_Discription(String order_Discription) {
		Order_Discription = order_Discription;
	}


	public String getPayment() {
		return payment;
	}


	public void setPayment(String payment) {
		this.payment = payment;
	}


	public double getBill_Amount() {
		return Bill_Amount;
	}


	public void setBill_Amount(double bill_Amount) {
		Bill_Amount = bill_Amount;
	}


	public void setUserId(String userId) {
		UserId = userId;
	}


	@Override
	public String toString() {
		return "Orders [OrderId=" + OrderId + ", Order_Discription=" + Order_Discription + ", UserId=" + UserId
				+ ", payment=" + payment + ", Bill_Amount=" + Bill_Amount + "]";
	}

	
}

