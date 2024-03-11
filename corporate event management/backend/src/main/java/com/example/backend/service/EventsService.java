package com.example.backend.service;

import com.example.backend.dto.request.EventsRequest;
import com.example.backend.dto.response.EventsListResponse;
import com.example.backend.dto.response.EventsResponse;

public interface EventsService {
    EventsResponse createEvents(EventsRequest eventsRequest);

    EventsListResponse getAllEvents();
}
