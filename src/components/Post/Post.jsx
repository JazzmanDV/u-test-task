import React from "react";
import { observer } from "mobx-react-lite";

import styles from "./Post.module.css";

const Post = observer(({ post }) => {
    return (
        <div className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>{post.content}</p>
            </div>
        </div>
    );
});

export default Post;
