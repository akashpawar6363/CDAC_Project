package com.demo.Liquer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Liquer.bean.CartOrder;

public interface CartOrderDetailsDao extends JpaRepository<CartOrder, Long> {
	
}
