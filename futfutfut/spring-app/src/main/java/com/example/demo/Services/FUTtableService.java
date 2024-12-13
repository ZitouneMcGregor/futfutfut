package com.example.demo.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.FUTtable;
import com.example.demo.Repository.FUTtableRepository;

@Service
public class FUTtableService {
	@Autowired
	private FUTtableRepository futtableRepository;
	
	public List<FUTtable> getAllFut(){
		
		return futtableRepository.findAll();
		
	}
	
    public FUTtable createPlayer(FUTtable player) {
        return futtableRepository.save(player);
    }

}

