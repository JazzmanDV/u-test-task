import React from "react";
import { Link, Outlet } from "react-router-dom";

import Button from "../../components/Button/Button";

import styles from "./PostFormLayout.module.css";

const PostFormLayout = () => {
    return (
        <div className={styles.postFormLayout}>
            <Link to=".">
                <Button>Назад</Button>
            </Link>
            <Outlet />
        </div>
    );
};

export default PostFormLayout;
