import calendarIcon from "../static/Calendar.png";
import placeMarkerIcon from "../static/PlaceMarker.png";
import deleteIcon from "../static/Delete.png";
import peopleIcon from "../static/People.png";
import gearIcon from "../static/Gear.png";

const EnrollPoster_options: Intl.DateTimeFormatOptions = {
    day: "numeric", // Numeric day
    month: "long", // Full month name
    hour12: false, // Use 24-hour time format
};
const EnrollPoster_formatter = new Intl.DateTimeFormat(
    "ru-RU",
    EnrollPoster_options
);

export function EnrollPoster({
                                 title,
                                 event_type,
                                 time,
                                 number_seats,
                                 avaliable_seats,
                                 place,
                                 isEnrolled,
                                 toggle,
                             }: {
    title: string;
    event_type: string;
    time: Date;
    number_seats: number;
    avaliable_seats: number;
    place: string | null;
    isEnrolled: boolean;
    toggle: () => void;
}) {
    return (
        <div className="h-64 relative">
            <div className="relative">
                <div className="w-full h-[191px] left-0 top-0 absolute bg-[#A3C08A] rounded-[20px]">
                    <div className="absolute bottom-4 right-4">
                        <button
                            className="w-[130px] p-2 bg-[#739953] rounded-[20px]"
                            title={isEnrolled ? "Отписаться" : "Записаться"}
                            onClick={toggle}
                        >
                            <div className="text-white text-base font-bold font-Montserrat">
                                {isEnrolled ? "Вы записаны" : "Записаться"}
                            </div>
                            {!isEnrolled && (
                                <div className="text-white text-[12px] font-normal font-Inter">
                                    {"Доступно: " + avaliable_seats + "/" + number_seats}
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className="h-[31px] left-[5px] top-[202px] absolute text-[#444444] text-2xl font-bold font-Montserrat">
                    {title}
                </div>
                <div className="left-[5px] top-[236px] absolute text-[#444444] text-base font-semibold font-Montserrat">
                    {(event_type != null ? event_type + ", " : "") + EnrollPoster_formatter.format(time) +
                        (place != null ? ", " + place : "")}
                </div>
            </div>
        </div>
    );
}

const GeneralPoster_options: Intl.DateTimeFormatOptions = {
    weekday: "short", // short name of the day
    year: "numeric",
    month: "long", // full name of the month
    day: "numeric",
    hourCycle: "h23", // 24-hour cycle
};
const GeneralPoster_formatter = new Intl.DateTimeFormat(
    "ru-RU",
    GeneralPoster_options
);

export function GeneralPoster({
                                  title,
                                  place,
                                  time,
                                  del,
                              }: {
    title: string;
    place: string | null;
    time: Date;
    del: () => void;
}) {
    return (
        <div className="h-64 relative">
            <div className="relative">
                <div className="w-full h-[191px] left-0 top-0 absolute bg-[#A3C08A] rounded-[20px]">
                    <div className="absolute bottom-4 right-4">
                    </div>
                </div>
                <div
                    className="h-[31px] left-[5px] top-[202px] absolute text-[#444444] text-2xl font-bold font-Montserrat">
                    {title}
                </div>
                <div className="left-[5px] top-[236px] absolute text-[#444444] text-base font-semibold font-Montserrat">
                    {EnrollPoster_formatter.format(time) +
                        (place != null ? ", " + place : "")}
                </div>
                <button onClick={del}>
                    <img alt="delete" src={deleteIcon} className="z-1 absolute top-4 right-4 w-[30px]"/>
                </button>
            </div>
        </div>
    );
}

export function GeneralPoster2({
                                   title,
                                   place,
                                   time,
                                   edit,
                                   participants,
                                   del,
                               }: {
    title: string;
    place: string | null;
    time: Date;
    edit: () => void;
    participants: () => void;
    del: () => void;
}) {
    return (

        <div className="h-64 relative">
            <div className="h-[191px] relative">

                <div className="w-full h-[191px] left-0 top-0 absolute bg-[#A3C08A] rounded-[20px]">
                    <div className="absolute bottom-4 right-4">
                    </div>
                </div>
                <div
                    className="h-[31px] left-[5px] top-[202px] absolute text-[#444444] text-2xl font-bold font-Montserrat">
                    {title}
                </div>
                <div className="left-[5px] top-[236px] absolute text-[#444444] text-base font-semibold font-Montserrat">
                    {EnrollPoster_formatter.format(time) +
                        (place != null ? ", " + place : "")}
                </div>
                <button onClick={edit}>
                    <img alt="edit" src={gearIcon} className="z-1 absolute top-4 right-4 w-[30px]"/>
                </button>

                <button onClick={participants}>
                    <img alt="people" src={peopleIcon} className="z-1 absolute top-4 left-4 w-[30px]"/>
                </button>

                <button onClick={del}>
                    <img alt="delete" src={deleteIcon} className="z-1 absolute bottom-4 right-4 w-[30px]"/>
                </button>

            </div>
        </div>





    );
}
