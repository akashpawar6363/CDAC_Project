package com.demo.Liquer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Liquer.bean.Orders;

public interface CustomerOrdersDao extends JpaRepository<Orders, Integer> {


}
