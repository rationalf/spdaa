import {DefaultLayout} from "./DefaultLayout";
import {PrimaryTextGreyTitleBold, PrimaryTextGreyTitleLight} from "./PrimaryText";
import * as Feed from "../pages/FeedPage";
import * as Dashboard from "../pages/Dashboard"
import {Link} from "react-router-dom";

export function PageLayout({
                               title1,
                               title2,
                               page,
                               children,
                           }: {
    title1: string;
    title2: string;
    page: string;
    children: React.ReactNode;
}) {
    return (
        <DefaultLayout loggedIn={true}>
            <div className="px-20 mt-10">
                <div className="h-[100px] bg-[#F1F2F0] grid grid-cols-2 gap-20 lg:gap-40">
                    <Link to={Feed.path} className="flex items-center justify-end">
                        {page === "Feed" ?
                            <PrimaryTextGreyTitleBold>{title1}</PrimaryTextGreyTitleBold>
                        :
                            <PrimaryTextGreyTitleLight>{title1}</PrimaryTextGreyTitleLight>}
                    </Link>
                    <Link to={Dashboard.path} className="flex items-center justify-start">
                        {page === "Feed" ?
                            <PrimaryTextGreyTitleLight>{title2}</PrimaryTextGreyTitleLight>
                            :
                            <PrimaryTextGreyTitleBold>{title2}</PrimaryTextGreyTitleBold>}
                    </Link>
                </div>
                {children}
            </div>
        </DefaultLayout>
    );
}
