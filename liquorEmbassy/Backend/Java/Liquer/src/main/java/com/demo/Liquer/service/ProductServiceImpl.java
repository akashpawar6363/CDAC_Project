package com.demo.Liquer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Liquer.bean.Product;
import com.demo.Liquer.dao.ProductDao;
@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
     private ProductDao productdao;
	@Override
	public List<Product> getProducts() {
		
		return productdao.findAll();
	}

}
