package com.demo.Liquer.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Liquer.bean.RegisterUser;

public interface RegisterUsersDao extends JpaRepository<RegisterUser,String> {



}
