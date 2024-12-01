/*global chrome*/
import React from "react";
import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
} from "react-chrome-extension-router";

import Dashboard from "../pages/Dashboard";
import InitPage from "../pages/InitPage";

const MasterRouter = () => {
    const [isInstalled, setIsInstalled] = React.useState(false);

    React.useEffect(() => {
        let bg = chrome.extension.getBackgroundPage();
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            setIsInstalled(bg.installationDone);
            bg.installationDone = true;
        });
    })

    return (
        <Router>
            {
                isInstalled ? <Dashboard order={"rp"}/> : <InitPage />
            }
        </Router>
    )
}

export default MasterRouter;