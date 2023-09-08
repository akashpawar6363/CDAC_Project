package com.demo.Liquer.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Liquer.bean.Delivery;

public interface DeliveryDao extends JpaRepository<Delivery, Integer> 
{

}
