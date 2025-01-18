import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Frontend = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
