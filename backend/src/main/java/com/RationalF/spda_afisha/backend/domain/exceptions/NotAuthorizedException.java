package com.RationalF.spda_afisha.backend.domain.exceptions;

public class NotAuthorizedException extends RuntimeException {
  public NotAuthorizedException(String message, Throwable cause) {
    super(message, cause);
  }
}
