import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PostsPage from "../pages/PostsPage/PostsPage";
import PostFormLayout from "../layouts/PostFormLayout/PostFormLayout";
import AddNewPostFormPage from "../pages/AddNewPostFormPage/AddNewPostFormPage";
import EditPostFormPage from "../pages/EditPostFormPage/EditPostFormPage";

import styles from "./App.module.css";

const App = () => {
    return (
        <main className={styles.app}>
            <div className={styles.appContent}>
                <BrowserRouter>
                    <Routes>
                        <Route path="posts" element={<PostsPage />} />
                        <Route path="posts" element={<PostFormLayout />}>
                            <Route path="add" element={<AddNewPostFormPage />} />
                            <Route path="edit/:postId" element={<EditPostFormPage />} />
                        </Route>
                        <Route path="*" element={<Navigate to="posts" replace={true} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </main>
    );
};

export default App;
