package com.RationalF.spda_afisha.backend.service.jpa;

import com.RationalF.spda_afisha.backend.domain.exceptions.NotAcceptableException;
import com.RationalF.spda_afisha.backend.domain.exceptions.NotFoundException;
import com.RationalF.spda_afisha.backend.domain.repositories.EventRepository;
import com.RationalF.spda_afisha.backend.domain.repositories.UserRepository;
import com.RationalF.spda_afisha.backend.dto.responses.enrolls.ListEnrollResponse;
import com.RationalF.spda_afisha.backend.dto.responses.events.EventResponse;
import com.RationalF.spda_afisha.backend.service.EnrollService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class JpaEnrollService implements EnrollService {
  private final EventRepository eventRepository;
  private final UserRepository userRepository;

  @Override
  public void createEnroll(String userId, Long eventId) {
    var event = eventRepository.getEventById(eventId);
    if (event == null) {
      throw new NotFoundException("Event not found");
    }
    var user = userRepository.getUserById(userId);
    if (user == null) {
      throw new NotFoundException("User not found");
    }

    if (user.getEvents().contains(event) || event.getUsers().contains(user)) {
      throw new NotAcceptableException("Enroll already exists");
    }

    if (event.getAvailableSeats() <= 0) {
      throw new NotAcceptableException("No seats available for current event");
    }

    event.setAvailableSeats(event.getAvailableSeats() - 1);
    user.getEvents().add(event);
    event.getUsers().add(user);
  }

  @Override
  public void deleteEnroll(String userId, Long eventId) {
    var event = eventRepository.getEventById(eventId);
    if (event == null) {
      throw new NotFoundException("Event not found");
    }
    var user = userRepository.getUserById(userId);
    if (user == null) {
      throw new NotFoundException("User not found");
    }
    if (!user.getEvents().contains(event) || !event.getUsers().contains(user)) {
      throw new NotAcceptableException("Enroll does not exist");
    }
    event.setAvailableSeats(event.getAvailableSeats() + 1);
    user.getEvents().remove(event);
    event.getUsers().remove(user);
  }

  @Override
  public ListEnrollResponse getEnrollsByUser(String userId) {
    var user = userRepository.getUserById(userId);
    if (user == null) {
      throw new NotFoundException("User not found");
    }

    return new ListEnrollResponse(
        user.getEvents()
            .stream()
            .map(event -> new EventResponse(
                event.getId(),
                event.getName(),
                event.getPlace(),
                event.getDescription(),
                event.getStartAt(),
                event.getNumberSeats(),
                event.getAvailableSeats(),
                event.getType(),
                event.getImages()
            ))
            .toList());
  }
}
