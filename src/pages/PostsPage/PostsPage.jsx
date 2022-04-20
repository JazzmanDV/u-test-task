import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import postsStore from "../../store/postsStore.js";
import Post from "../../components/Post/Post";
import Button from "../../components/Button/Button";

import styles from "./PostsPage.module.css";

const PostsPage = observer(() => {
    const posts = postsStore.posts;

    const mappedPosts = posts.map((post) => (
        <li className={styles.postsListItem} key={post.id}>
            <Post post={post} />
            <Link to={`edit/${post.id}`}>
                <Button style={{ width: "100%" }}>перейти</Button>
            </Link>
        </li>
    ));

    return (
        <div className={styles.postsPage}>
            <h2 className={styles.title}>Блог</h2>
            <Link to="add">
                <Button>+ Добавить</Button>
            </Link>
            <ul className={styles.postsList}>{mappedPosts}</ul>
        </div>
    );
});

export default PostsPage;
