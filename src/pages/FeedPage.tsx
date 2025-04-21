import {useFeed} from "../hooks/feed";
import {type2ru} from "../utils/event";
import {EnrollPoster} from "../components/Poster";
import {EnrolledEvent} from "../structs/Event";
import {_ensureUserOnboarded} from "../components/LoginState";
import {PageLayout} from "../components/PageLayout";

export const path = "/feed";

export function Page() {
    return _ensureUserOnboarded({
        useDataFetch: useFeed,
        render: _render,
    });
}

function _render({
                     events,
                     toggleEventEnrollment,
                 }: {
    events: EnrolledEvent[];
    toggleEventEnrollment: (event_id: number) => Promise<void>;
}) {

    return (
        <PageLayout title1={"Все ивенты"} title2={"Мои ивенты"} page={"Feed"}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center">
                {events!.map((event) => (
                    <div className="w-full p-0">
                        <EnrollPoster
                            title={event.name}
                            event_type={(type2ru.get(event.type) as string)}
                            time={event.start_at}
                            avaliable_seats={event.available_seats}
                            number_seats={event.number_seats}
                            place={event.place}
                            isEnrolled={event.isEnrolled}
                            toggle={() => toggleEventEnrollment(event.id)}
                            key={event.id}
                        />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}
