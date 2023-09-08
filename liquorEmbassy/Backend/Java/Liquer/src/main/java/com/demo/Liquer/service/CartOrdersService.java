package com.demo.Liquer.service;

import java.util.List;

import com.demo.Liquer.bean.CartOrder;
import com.demo.Liquer.bean.MyOrder;
import com.demo.Liquer.bean.Orders;

public interface CartOrdersService {
	
	  int saveOrder(CartOrder cartOrder);

	List<MyOrder> getMyOrder(String userId);

	int insertToMyOrder(CartOrder order);
		  
}
