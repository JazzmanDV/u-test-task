import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import styles from "./EditPostForm.module.css";

import postsStore from "../../store/postsStore.js";
import Button from "../Button/Button";

const EditPostForm = observer(({ post }) => {
    const navigate = useNavigate();

    const inputTitleRef = useRef(null);
    const inputContentRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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

    return (
        <div className={styles.postForm}>
            <h3 className={styles.title}>Запись "{post.title}"</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите заголовок"
                    defaultValue={post.title}
                    required
                    ref={inputTitleRef}
                />
                <textarea
                    placeholder="Введите текст"
                    defaultValue={post.content}
                    rows={10}
                    required
                    ref={inputContentRef}
                ></textarea>
                <div className={styles.buttonsWrapper}>
                    <Button className={styles.buttonRed} onClick={handleDeleteButtonClick}>
                        Удалить
                    </Button>
                    <Button type="submit" onClick={handleSaveButtonClick}>
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
});

export default EditPostForm;
