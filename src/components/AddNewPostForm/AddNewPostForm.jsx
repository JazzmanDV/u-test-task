import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import styles from "./AddNewPostForm.module.css";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";

const AddNewPostForm = observer(() => {
    const navigate = useNavigate();

    const inputTitleRef = useRef(null);
    const inputContentRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAddButtonClick = () => {
        const title = inputTitleRef.current.value.trim();
        const content = inputContentRef.current.value.trim();

        if (!title || !content) {
            return;
        }

        postsStore.add(title, content);
        navigate("/", { replace: true });
    };

    return (
        <div className={styles.postForm}>
            <h3 className={styles.title}>Добавление новой записи</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Введите заголовок" required ref={inputTitleRef} />
                <textarea
                    placeholder="Введите текст"
                    rows={10}
                    required
                    ref={inputContentRef}
                ></textarea>
                <div className={styles.buttonsWrapper}>
                    <Link to={"/"}>
                        <Button>Отмена</Button>
                    </Link>
                    <Button type="submit" onClick={handleAddButtonClick}>
                        Добавить
                    </Button>
                </div>
            </form>
        </div>
    );
});

export default AddNewPostForm;
