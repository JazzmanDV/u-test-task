import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./MainPage.module.css";

const MainPage = () => {
    return (
        <main className={styles.mainPage}>
            <div className={styles.contentWrapper}>
                <Outlet />
            </div>
        </main>
    );
};

export default MainPage;
