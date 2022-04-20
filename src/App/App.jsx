import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PostsPage from "../pages/PostsPage/PostsPage";
import AddNewPostPage from "../pages/AddNewPostPage/AddNewPostPage";
import EditPostPage from "../pages/EditPostPage/EditPostPage";

import styles from "./App.module.css";

const App = () => {
    return (
        <main className={styles.app}>
            <div className={styles.appContent}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/posts" element={<PostsPage />} />
                        <Route path="/posts/add" element={<AddNewPostPage />} />
                        <Route path="/posts/edit/:postId" element={<EditPostPage />} />
                        <Route path="*" element={<Navigate to="/posts" replace={true} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </main>
    );
};

export default App;
