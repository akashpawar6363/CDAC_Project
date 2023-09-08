package com.demo.Liquer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Liquer.bean.LoginB;

public interface LoginDao  extends JpaRepository<LoginB,String>
{
	 @Query("SELECT e FROM LoginB e WHERE e.username = :username AND e.password = :password")
	    LoginB findByIdAndOtherField(String username, String password);	

}
