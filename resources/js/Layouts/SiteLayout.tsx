import { PageProps } from "@/types";
import { PropsWithChildren } from "react";
import NavBar from "@/Components/NavBar";
const SiteLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-app-bg site-font">
            <div className="fixed top-0 left-0 right-0 z-50 bg-app-bg shadow">
                <NavBar />
            </div>
            <div>{children}</div>
            <footer className="bg-[#E6E6E6]">
                <div className="container px-4 mx-auto py-16">
                    <p>© Anindya Mukherjee</p>
                </div>
            </footer>
        </div>
    );
};

export default SiteLayout;
