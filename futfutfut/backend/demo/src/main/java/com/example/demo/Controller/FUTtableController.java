package com.example.demo.Controller;

import com.example.demo.Entity.FUTtable;
import com.example.demo.Repository.FUTtableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/joueurs")
public class FUTtableController {
	
	@Autowired
	private FUTtableRepository futtableRepository;
	
	@GetMapping
	public List<FUTtable> getAllFut(){
		return futtableRepository.findAll();
	}

}
