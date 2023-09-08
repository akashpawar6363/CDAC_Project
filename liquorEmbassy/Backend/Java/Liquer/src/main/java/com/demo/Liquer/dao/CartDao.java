package com.demo.Liquer.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Liquer.bean.Orders;

public interface CartDao extends JpaRepository<Orders, Long> {

}
