package com.example.backend.dto.response;

import java.util.List;

import com.example.backend.model.Events;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventsListResponse {

    private List<Events> events;
}
