import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";

const AppLayout = () => {
    return (
        <main className={styles.app}>
            <div className={styles.appContent}>
                <Outlet />
            </div>
        </main>
    );
};

export default AppLayout;
