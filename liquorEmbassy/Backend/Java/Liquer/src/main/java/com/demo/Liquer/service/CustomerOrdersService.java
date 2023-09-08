package com.demo.Liquer.service;

import com.demo.Liquer.bean.Orders;
import java.util.List;

public interface CustomerOrdersService {

	List<Orders> getCustomerOrders();


	int sendOrder(int id);

}
