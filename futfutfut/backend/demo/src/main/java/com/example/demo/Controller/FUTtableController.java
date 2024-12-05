package com.example.demo.Controller;

import com.example.demo.Entity.FUTtable;

import Services.FUTtableService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/joueurs")
public class FUTtableController {
	
	@Autowired
	private FUTtableService futtableService;
	
	@GetMapping
	public List<FUTtable> getAllFut(){
		return futtableService.getAllFut() ;
	}
	
    @PostMapping
    public ResponseEntity<FUTtable> createPlayer(@RequestBody FUTtable player) {
        FUTtable createdPlayer = futtableService.createPlayer(player);
        return ResponseEntity.ok(createdPlayer);
    }
	
	
}
