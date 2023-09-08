package com.demo.Liquer.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Liquer.bean.*;
import com.demo.Liquer.dao.LoginDao;
import com.demo.Liquer.dao.RegisterUsersDao;

@Service
public class RegisterUsersServiceImpl implements RegisterUsersService {
    
	
	@Autowired
	private RegisterUsersDao  registerUsersDao;
	@Autowired 
	private LoginDao logindao;

	
	@Override
	public int Adduser(RegisterUser registerUser) {
		
	try
	{
	 	Optional<RegisterUser> r=registerUsersDao.findById(registerUser.getUsername());
	 	if(r.isEmpty()) {
	registerUsersDao.save(registerUser);
	LoginB log=new LoginB(registerUser.getUsername(),registerUser.getPassword(),registerUser.getUser_type());
	logindao.save(log);
	return 1;
        }
		return 2;
	}
	catch(Exception e )
	{
		return 0;
	
	}
	}

}
