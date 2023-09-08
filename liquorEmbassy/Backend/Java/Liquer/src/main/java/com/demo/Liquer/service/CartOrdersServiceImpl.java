package com.demo.Liquer.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.criteria.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Liquer.bean.CartOrder;
import com.demo.Liquer.bean.MyOrder;
import com.demo.Liquer.bean.Product;
import com.demo.Liquer.bean.Orders;
import com.demo.Liquer.dao.CartOrderDetailsDao;
import com.demo.Liquer.dao.CustomerOrdersDao;
import com.demo.Liquer.dao.MyOrderDao;
import com.demo.Liquer.dao.ProductDao;


@Service
public class CartOrdersServiceImpl implements CartOrdersService {
    @Autowired
    private CartOrderDetailsDao cartOrderDetailsDao;
    @Autowired
    private ProductDao productdao;
	@Autowired
	private CustomerOrdersDao customerOrdersDao;
	@Autowired
	private MyOrderDao myOrderDao;
    private String orderDetails;
    public int saveOrder(CartOrder cartOrder) {
		CartOrder stored =cartOrderDetailsDao.save(cartOrder);
		if(stored!=null)
		{String userOrder="";
		String userData="";
        Integer id1=stored.getOrderId().intValue();
		String storesplit[]=stored.getProducts().split(",");
			System.out.println("one");
			for(int i=0;i<storesplit.length;i++)
			{  
				String idAndQuantity[]=storesplit[i].split("-");
		   Optional<Product> product=productdao.findById(Integer.parseInt(idAndQuantity[0].trim()));
		  
				userOrder+=idAndQuantity[1]+" number of "+product.get().getName() +"  "+ product.get().getDescription()+",";
				
			}
			userData=stored.getTotal()+"-"+stored.getUserId()+"-"+stored.getOrderId()+"-"+stored.getPayment();
			orderDetails=userOrder;
			if(insertToShop(userOrder,userData)==1)
			return 1;

		}
			return 0;
    }
    public int insertToShop(String userOrder,String userData)
    {
     	String[] orders=userData.split("-");
       	Orders order=new Orders();
    	order.setOrderId(Integer.parseInt(orders[2]));
    	order.setBill_Amount(Double.parseDouble(orders[0]));
    	order.setUserId(orders[1]);
    	order.setOrder_Discription(userOrder.substring(0,userOrder.length()-1));
    	order.setPayment(orders[3]);
    
    	System.out.println(order);
    	if(customerOrdersDao.save(order)!=null)
    		return 1;
    	return 0;
		
    }
    public int insertToMyOrder(CartOrder cartOrder)
    {	
    	MyOrder myOrder=new MyOrder();
    	myOrder.setOrderId(cartOrder.getOrderId().intValue());
    	myOrder.setBill_Amount(cartOrder.getTotal());
    	myOrder.setOrder_Discription(orderDetails);
    	myOrder.setStatus("packing");
    	myOrder.setUserId(cartOrder.getUserId());
    	myOrder.setPayment(cartOrder.getPayment());
      if(myOrderDao.save(myOrder)!=null)
		return 1;
      return 0;
    	
    }
	@Override
	public List<MyOrder> getMyOrder(String userId) {
		System.out.println( myOrderDao.findByOtherField(userId));
		return myOrderDao.findByOtherField(userId);
		
	}
	

}
