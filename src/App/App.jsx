import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./App.module.css";

const App = () => {
    return (
        <main className={styles.mainPage}>
            <div className={styles.contentWrapper}>
                <Outlet />
            </div>
        </main>
    );
};

export default App;
