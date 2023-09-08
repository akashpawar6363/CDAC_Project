package com.demo.Liquer.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.Liquer.bean.Delivery;
import com.demo.Liquer.bean.MyOrder;
import com.demo.Liquer.dao.DeliveryDao;
import com.demo.Liquer.dao.MyOrderDao;
@Service
public class DeliveryServiceImpl implements DeliveryService {
@Autowired
private DeliveryDao deliverydao; 
@Autowired 
private MyOrderDao myOrderDao;
	@Override
	public List<Delivery> getDeliveryData() {
		
		return deliverydao.findAll(); 
	}
	@Override
	public int clearDeliveryRecords(int id) {
		if(id>0)
		{ 
			Optional<MyOrder> myorder=myOrderDao.findById(id);
			if(myorder.isPresent())
			{myorder.get().setStatus("Delivered");
			myOrderDao.save(myorder.get());
			}deliverydao.deleteById(id);		 
			 return 1;
		}
		return 0;
	}

}
