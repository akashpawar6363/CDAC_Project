package com.demo.Liquer.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Liquer.bean.LoginB;
import com.demo.Liquer.dao.LoginDao;
@Service
public class LoginServiceImpl implements LoginService {

	@Autowired 
	private LoginDao logindao;
	
	 @Override
	public String verify(LoginB c) {
	LoginB log=	 logindao.findByIdAndOtherField(c.getUsername(), c.getPassword());
		if(log!=null)
		{
			return log.getUser_type();
		}
		return null;
	}

}
