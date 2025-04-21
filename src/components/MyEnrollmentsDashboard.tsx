import {GeneralPoster} from "./Poster";
import {IEvent} from "../structs/Event";

export function MyEnrollmentsDashboard({
                                           events,
                                           unenroll,
                                       }: {
    events: IEvent[];
    unenroll: (event_id: number) => Promise<void>;
}) {
    return (
        <div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center">
            {events!.map((event) => (
                <div className="w-full p-0">
                    <GeneralPoster
                        title={event.name}
                        time={event.start_at}
                        del={() => unenroll(event.id)}
                        place={event.place}
                        key={event.id}
                    />
                </div>
            ))}
        </div>
    );
}
