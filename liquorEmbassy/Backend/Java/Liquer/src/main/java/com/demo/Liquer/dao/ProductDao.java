package com.demo.Liquer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.Liquer.bean.Product;

public interface ProductDao extends JpaRepository<Product,Integer> {
	

}
