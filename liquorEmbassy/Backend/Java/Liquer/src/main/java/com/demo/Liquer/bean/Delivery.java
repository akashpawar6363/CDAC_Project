package com.demo.Liquer.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customerrecords")

public class Delivery {

	@Id
	private int id;

	private String customer_name;

	private String delivery_address;
	private String Mobile;

	private String delivery_person_allocated;

	public Delivery() {
		super();
	}

	public Delivery(int id, String customer_name, String delivery_address, String mobile,
			String delivery_person_allocated) {
		super();
		this.id = id;
		this.customer_name = customer_name;
		this.delivery_address = delivery_address;
		Mobile = mobile;
		this.delivery_person_allocated = delivery_person_allocated;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getDelivery_address() {
		return delivery_address;
	}

	public void setDelivery_address(String delivery_address) {
		this.delivery_address = delivery_address;
	}

	public String getMobile() {
		return Mobile;
	}

	public void setMobile(String mobile) {
		Mobile = mobile;
	}

	public String getDelivery_person_allocated() {
		return delivery_person_allocated;
	}

	public void setDelivery_person_allocated(String delivery_person_allocated) {
		this.delivery_person_allocated = delivery_person_allocated;
	}

	
}
