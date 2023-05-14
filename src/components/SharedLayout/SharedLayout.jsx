import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import Loader from "components/Loader/Loader";

const SharedLayout = () => {
    return(
        <>
            <AppBar/>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;