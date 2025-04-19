package com.RationalF.spda_afisha.backend.dto.responses;

public record ApiErrorResponse(
        String description,
        String code,
        String exceptionName,
        String exceptionMessage) {
}
