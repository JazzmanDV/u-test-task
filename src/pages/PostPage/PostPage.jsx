import React from "react";
import { observer } from "mobx-react-lite";
import { useParams, Link, Navigate } from "react-router-dom";

import styles from "./PostPage.module.css";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import EditPostForm from "../../components/EditPostForm/EditPostForm";

const PostPage = observer(() => {
    let { postId } = useParams();
    postId = Number(postId);

    const post = postsStore.posts.find((post) => post.id === postId);

    return post ? (
        <div className={styles.postPage}>
            <Link to={"/"}>
                <Button>Назад</Button>
            </Link>
            <EditPostForm post={post} />
        </div>
    ) : (
        <Navigate to="/" replace={true} />
    );
});

export default PostPage;
