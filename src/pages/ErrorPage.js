import React from "react";
import Header from "../components/Header";

const ErrorPage = (props) => {
    return(
        <div>
            <Header style="header-error" text="Error 404: Page not found"/>
        </div>
    )
};

export default ErrorPage;