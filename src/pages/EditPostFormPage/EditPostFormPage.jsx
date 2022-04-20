import React from "react";
import { observer } from "mobx-react-lite";
import { Navigate, useParams } from "react-router-dom";

import postsStore from "../../store/postsStore.js";
import EditPostForm from "../../components/EditPostForm/EditPostForm";

const EditPostFormPage = observer(() => {
    let { postId } = useParams();
    postId = Number(postId);
    const post = postsStore.posts.find((post) => post.id === postId);

    return post ? <EditPostForm post={post} /> : <Navigate to="/" replace={true} />;
});

export default EditPostFormPage;
