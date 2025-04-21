import { EnrolledEvent, EventType, EventTypeRu } from "../structs/Event";

export const eventTypesRu: EventTypeRu[] = [
  "Митап",
  "Конференция",
  "Концерт",
  "Разное",
];

export const type2ru = new Map<EventType, EventTypeRu>([
  ["MEETUP", "Митап"],
  ["CONFERENCE", "Конференция"],
  ["CONCERT", "Концерт"],
  ["OTHER", "Разное"],
]);

export const ru2type = new Map<EventTypeRu, EventType>([
  ["Митап", "MEETUP"],
  ["Конференция", "CONFERENCE"],
  ["Концерт", "CONCERT"],
  ["Разное", "OTHER"],
]);
