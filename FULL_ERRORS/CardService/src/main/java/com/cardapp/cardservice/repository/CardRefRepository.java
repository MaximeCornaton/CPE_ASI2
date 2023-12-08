package com.cardapp.cardservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.cpe.springboot.card.model.CardReference;

public interface CardRefRepository extends CrudRepository<CardReference, Integer> {

}
