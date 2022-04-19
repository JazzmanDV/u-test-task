import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostPage from "./pages/PostPage/PostPage";
import AddNewPostPage from "./pages/AddNewPostPage/AddNewPostPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route index element={<Navigate to="posts" replace={true} />} />
                    <Route path="*" element={<Navigate to="posts" replace={true} />} />
                    <Route path="posts">
                        <Route index element={<PostsPage />} />
                        <Route path=":postId" element={<PostPage />} />
                        <Route path="add-new-post" element={<AddNewPostPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
