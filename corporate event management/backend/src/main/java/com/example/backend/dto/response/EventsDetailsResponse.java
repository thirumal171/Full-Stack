package com.example.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventsDetailsResponse {
    private String eventname;
    private String description;
    private int count;
    private int charge;
    private String address;
    private String city;
    private String pincode;
    private String facility;
}
