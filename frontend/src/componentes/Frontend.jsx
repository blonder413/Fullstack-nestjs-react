import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

export const Frontend = () => {
    return (
        <AuthProvider>
            <Header />
            <Outlet />
            <Footer />
        </AuthProvider>
    );
};
