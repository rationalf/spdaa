import {CreateNewEventButton} from "./CreateNewEventButton";
import {GeneralPoster2} from "./Poster";
import {IEvent} from "../structs/Event";

export function MyEventsDashboard({
                                      events,
                                      showEventParticipants,
                                      editEvent,
                                      createEvent,
                                      deleteEvent,
                                  }: {
    events: IEvent[];
    showEventParticipants: (eventId: number) => void;
    editEvent: (eventId: number) => void;
    createEvent: () => Promise<void>;
    deleteEvent: (eventId: number) => Promise<void>;
}) {
    return (
        <>
            <CreateNewEventButton onClick={createEvent}/>
            <div
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center">
                {events!.map((event) => (
                    <div className="z-0 w-full p-0">
                        <GeneralPoster2
                            title={event.name}
                            time={event.start_at}
                            del={() => deleteEvent(event.id)}
                            edit={() => editEvent(event.id)}
                            participants={() => showEventParticipants(event.id)}
                            place={event.place}
                            key={event.id}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
