package com.example.backend.service.imp;

import com.example.backend.dto.request.EventsRequest;
import com.example.backend.dto.response.EventsListResponse;
import com.example.backend.dto.response.EventsResponse;
import com.example.backend.model.Events;
import com.example.backend.repository.EventsRepository;
import com.example.backend.service.EventsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventsServiceImpl implements EventsService {

    @Autowired
    private EventsRepository eventsRepository;

    @Override
    public EventsResponse createEvents(EventsRequest event) {

        var eve = Events.builder()
                .eventname(event.getEventname())
                .description(event.getDescription())
                .count(event.getCount())
                .charge(event.getCharge())
                .address(event.getAddress())
                .city(event.getCity())
                .pincode(event.getPincode())
                .facility(event.getFacility())
                .build();

        eventsRepository.save(eve);

        return EventsResponse.builder().message("Events added successfully").build();
    }

    @Override
    public EventsListResponse getAllEvents() {

        List<Events> event = eventsRepository.findAll();
        return EventsListResponse.builder()
                .events(event)
                .build();
    }

    // Other CRUD methods can be implemented similarly
}
