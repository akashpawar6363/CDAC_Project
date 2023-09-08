package com.demo.Liquer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.Liquer.bean.Delivery;
import com.demo.Liquer.bean.MyOrder;
import com.demo.Liquer.bean.Orders;
import com.demo.Liquer.bean.RegisterUser;
import com.demo.Liquer.dao.CustomerOrdersDao;
import com.demo.Liquer.dao.DeliveryDao;
import com.demo.Liquer.dao.MyOrderDao;
import com.demo.Liquer.dao.RegisterUsersDao;
@Service
public class CustomerOrdersServiceImpl implements CustomerOrdersService {

	@Autowired
	private CustomerOrdersDao customerOrdersDao;
	@Autowired 
	private DeliveryDao deliveryDao;
	@Autowired
	private RegisterUsersDao registerUsersDao;
	@Autowired
	private MyOrderDao myOrderDao;
	@Override
	public List<Orders> getCustomerOrders() {
		return customerOrdersDao.findAll();
	}

	@Override
	public int sendOrder(int id) {
		Optional<Orders> order=customerOrdersDao.findById(id);
		
//		Integer id1=order.getOrderId().intValue();
		Optional<MyOrder> myorder=myOrderDao.findById(order.get().getOrderId());
		
		if(order.isEmpty())
		{	return 2;}
		else if(order.isPresent())
		{ if(myorder.isPresent())
		{myorder.get().setStatus("Send for Delivery");
		myOrderDao.save(myorder.get());
		}System.out.println(order.get().getUserId());
			Optional<RegisterUser> user=registerUsersDao.findById(order.get().getUserId());
			if(user.isPresent())
			{
			Delivery delivery=new Delivery();
			delivery.setId(id);
			delivery.setCustomer_name(user.get().getUsername());
			delivery.setDelivery_address(user.get().getAddress());
			delivery.setMobile(user.get().getMob_number());
			
			if(deliveryDao.save(delivery)!=null)
			{
			customerOrdersDao.deleteById(id);
			}
			return 1;
		}
		}
		return 0;
	}


}
