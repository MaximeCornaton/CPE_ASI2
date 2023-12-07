package com.cardapp.cardservice.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cardapp.cardservice.service.CardModelService;


@RestController

public class CardRestController {

    private final CardModelService cardModelService;

    public CardRestController(CardModelService cardModelService) {
        this.cardModelService=cardModelService;
    }

    

}
