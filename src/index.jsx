import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import App from "./App/App";
import PostsPage from "./pages/PostsPage/PostsPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";
import AddNewPostPage from "./pages/AddNewPostPage/AddNewPostPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
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
    </React.StrictMode>,
    document.getElementById("root")
);
