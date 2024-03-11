package com.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.backend.dto.request.EventsRequest;
import com.example.backend.dto.response.EventsListResponse;
import com.example.backend.dto.response.EventsResponse;
import com.example.backend.repository.EventsRepository;
import com.example.backend.service.EventsService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/events")
// @PreAuthorize("hasRole('ADMIN')")
@CrossOrigin
@RequiredArgsConstructor
public class EventsController {

    private final EventsService eventsservice;
    private final EventsRepository repo;

    // @PreAuthorize("hasAuthority('admin:create')")
    @PostMapping("/add")
    public ResponseEntity<?> createEvents(@RequestBody EventsRequest eventsrequest) {
        EventsResponse response = new EventsResponse();

        try {
            response = eventsservice.createEvents(eventsrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllEvents() {

        EventsListResponse eventsListResponse = new EventsListResponse();

        try {
            eventsListResponse = eventsservice.getAllEvents();
            return new ResponseEntity<>(eventsListResponse, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(eventsListResponse, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteFunc(@RequestParam String id) {
        repo.deleteById(id);
        return "Deleted";
    }

}
