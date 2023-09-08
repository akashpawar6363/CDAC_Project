package com.demo.Liquer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Liquer.bean.MyOrder;

public interface MyOrderDao extends JpaRepository<MyOrder, Integer> {
	@Query("SELECT e FROM MyOrder e WHERE e.UserId= :userID")
	List<MyOrder> findByOtherField(String userID);
}
