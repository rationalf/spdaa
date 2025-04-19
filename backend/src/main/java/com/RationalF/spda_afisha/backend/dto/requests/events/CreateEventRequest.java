package com.RationalF.spda_afisha.backend.dto.requests.events;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.RationalF.spda_afisha.backend.domain.models.EventType;

import java.sql.Timestamp;

public record CreateEventRequest(
    String name,
    String place,
    String description,
    @JsonProperty("start_at")
    Timestamp startAt,
    @JsonProperty("number_seats")
    Long numberSeats,
    EventType type
) {}
