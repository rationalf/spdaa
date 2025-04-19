package com.RationalF.spda_afisha.backend.dto.requests.events;

import java.util.List;

public record DeleteImagesRequest(
    List<String> images
) {}
