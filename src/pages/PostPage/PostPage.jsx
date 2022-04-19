import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";

import styles from "./PostPage.module.css";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GeneralPostForm from "../../components/GeneralPostForm/GeneralPostForm";

const PostPage = observer(() => {
    const navigate = useNavigate();

    let { postId } = useParams();
    postId = Number(postId);
    const post = postsStore.posts.find((post) => post.id === postId);

    const inputTitleRef = useRef(null);
    const inputContentRef = useRef(null);

    const LeftButton = () => (
        <Button className={styles.buttonRed} onClick={handleDeleteButtonClick}>
            Удалить
        </Button>
    );

    const RightButton = () => (
        <Button type="submit" onClick={handleSaveButtonClick}>
            Сохранить
        </Button>
    );

    const handleDeleteButtonClick = () => {
        const result = confirm("Удалить запись?");

        if (result) {
            postsStore.delete(post);
            navigate("/", { replace: true });
        }
    };

    const handleSaveButtonClick = () => {
        const title = inputTitleRef.current.value.trim();
        const content = inputContentRef.current.value.trim();

        if (!title || !content) {
            return;
        }

        postsStore.update(post, title, content);
        navigate("/", { replace: true });
    };

    return post ? (
        <div className={styles.postPage}>
            <Link to={"/"}>
                <Button>Назад</Button>
            </Link>
            <GeneralPostForm
                formTitle={`Запись "${post.title}"`}
                titleDefaultValue={post.title}
                contentDefaultValue={post.content}
                inputTitleRef={inputTitleRef}
                inputContentRef={inputContentRef}
                LeftButton={LeftButton}
                RightButton={RightButton}
            />
        </div>
    ) : (
        <Navigate to="/" replace={true} />
    );
});

export default PostPage;
