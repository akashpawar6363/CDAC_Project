package com.demo.Liquer.service;
import java.util.List;

import com.demo.Liquer.bean.Delivery;

public interface DeliveryService {

	List<Delivery> getDeliveryData();

	int clearDeliveryRecords(int id);


}
