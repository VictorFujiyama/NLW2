import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";


function Routes() {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/study",
            element: <TeacherList />
        },
        {
            path: "/give-classes",
            element: <TeacherForm />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Routes;
