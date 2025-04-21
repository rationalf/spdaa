import {PageLayout} from "./PageLayout";

export function DashboardNavButton({
                                       onClick,
                                       current,
                                       children,
                                   }: {
    onClick: () => void;
    current: boolean;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            className={`h-[60px] px-8 ${current ? "bg-[#739953]" : "bg-[#828181]"} rounded-[30px] text-[#F1F2F0] text-[27px] font-Montserrat mt-6 mb-10 mr-8`}
        >
            {children}
        </button>
    );
}

export function DashboardLayout({
                                    current,
                                    choose,
                                    children,
                                }: {
    current: "enrollments" | "events";
    choose: (chosen: "enrollments" | "events") => void;
    children: React.ReactNode;
}) {
    return (
        <PageLayout title1={"Все ивенты"} title2={"Мои ивенты"} page={"Dashboard"}>
            <div className="flex flex-row items-left">
                <DashboardNavButton
                    onClick={() => choose("enrollments")}
                    current={current === "enrollments"}
                >
                    Сохраненные
                </DashboardNavButton>
                <DashboardNavButton
                    onClick={() => choose("events")}
                    current={current === "events"}
                >
                    Созданные
                </DashboardNavButton>
            </div>
            {children}
        </PageLayout>
    );
}
