import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout/AppLayout";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostFormLayout from "./layouts/PostFormLayout/PostFormLayout";
import AddNewPostFormPage from "./pages/AddNewPostFormPage/AddNewPostFormPage";
import EditPostFormPage from "./pages/EditPostFormPage/EditPostFormPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Navigate to="posts" replace={true} />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="posts" element={<PostFormLayout />}>
                        <Route path="add" element={<AddNewPostFormPage />} />
                        <Route path="edit/:postId" element={<EditPostFormPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="posts" replace={true} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
