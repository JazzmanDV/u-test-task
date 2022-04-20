import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GeneralPostForm from "../../components/GeneralPostForm/GeneralPostForm";

import styles from "./EditPostPage.module.css";

const EditPostPage = observer(() => {
    const navigate = useNavigate();

    let { postId } = useParams();
    postId = Number(postId);
    const post = postsStore.posts.find((post) => post.id === postId);

    const inputTitleRef = useRef(null);
    const inputContentRef = useRef(null);

    const LeftButton = () => (
        <Button
            style={{ backgroundColor: "#f7cecc", borderColor: "#a47879" }}
            onClick={handleDeleteButtonClick}
        >
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

export default EditPostPage;
