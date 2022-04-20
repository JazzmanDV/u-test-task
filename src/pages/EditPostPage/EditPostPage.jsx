import React from "react";
import { observer } from "mobx-react-lite";
import { Link, Navigate, useParams } from "react-router-dom";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import EditPostForm from "../../components/EditPostForm/EditPostForm";

import styles from "./EditPostPage.module.css";

const EditPostPage = observer(() => {
    let { postId } = useParams();
    postId = Number(postId);
    const post = postsStore.posts.find((post) => post.id === postId);

    return post ? (
        <div className={styles.editPostPage}>
            <Link to="/">
                <Button>Назад</Button>
            </Link>
            <EditPostForm post={post} />
        </div>
    ) : (
        <Navigate to="/" replace={true} />
    );
});

export default EditPostPage;
