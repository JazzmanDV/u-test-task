import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PostsPage from "../pages/PostsPage/PostsPage";
import EditPostPage from "../pages/EditPostPage/EditPostPage";
import AddNewPostPage from "../pages/AddNewPostPage/AddNewPostPage";

import styles from "./App.module.css";

const App = () => {
    return (
        <main className={styles.app}>
            <div className={styles.contentWrapper}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Navigate to="posts" replace={true} />} />
                            <Route path="*" element={<Navigate to="posts" replace={true} />} />
                            <Route path="posts">
                                <Route index element={<PostsPage />} />
                                <Route path="edit">
                                    <Route index element={<Navigate to="posts" replace={true} />} />
                                    <Route path=":postId" element={<EditPostPage />} />
                                </Route>
                                <Route path="add" element={<AddNewPostPage />} />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </main>
    );
};

export default App;
