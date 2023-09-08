package com.demo.Liquer.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "MyOrder")
public class MyOrder {
	@Id
	private int OrderId;
	private String Order_Discription;
   private String UserId;
   private String payment;
   private double Bill_Amount;
   private  String status;
   
public MyOrder() {
	super();
}

public MyOrder(int orderId, String order_Discription, String userId, String payment, double bill_Amount,
		String status) {
	super();
	OrderId = orderId;
	Order_Discription = order_Discription;
	UserId = userId;
	this.payment = payment;
	Bill_Amount = bill_Amount;
	this.status = status;
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

public String getUserId() {
	return UserId;
}

public void setUserId(String userId) {
	UserId = userId;
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

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

@Override
public String toString() {
	return "MyOrder [OrderId=" + OrderId + ", Order_Discription=" + Order_Discription + ", UserId=" + UserId
			+ ", payment=" + payment + ", Bill_Amount=" + Bill_Amount + ", status=" + status + "]";
}



}

