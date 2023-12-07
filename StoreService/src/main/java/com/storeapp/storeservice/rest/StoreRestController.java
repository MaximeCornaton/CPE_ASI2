package com.storeapp.storeservice.rest;

import com.storeapp.storeservice.service.StoreService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//ONLY FOR TEST NEED ALSO TO ALLOW CROOS ORIGIN ON WEB BROWSER SIDE
@CrossOrigin
@RestController
@RequestMapping(value="/store")
public class StoreRestController {

    private final StoreService storeService;

    public StoreRestController(StoreService storeService) {
        this.storeService = storeService;
    }

}
