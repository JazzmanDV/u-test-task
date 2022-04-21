import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import sanitizeTextInputState from "../../utils/sanitizeTextInputState";
import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GenericPostForm from "../GenericPostForm/GenericPostForm";

const EditPostForm = observer(({ post }) => {
    const navigate = useNavigate();

    const [titleInputState, setTitleInputState] = useState(post.title);
    const [contentInputState, setContentInputState] = useState(post.content);

    const handleDeleteButtonClick = () => {
        const result = confirm("Удалить запись?");

        if (result) {
            postsStore.delete(post);
            navigate("/posts", { replace: true });
        }
    };

    const handleSaveButtonClick = () => {
        const title = sanitizeTextInputState(titleInputState, setTitleInputState);
        const content = sanitizeTextInputState(contentInputState, setContentInputState);

        if (!title || !content) {
            return;
        }

        postsStore.update(post, title, content);
        navigate("/posts", { replace: true });
    };

    const DeleteButton = () => (
        <Button
            style={{ backgroundColor: "#f7cecc", borderColor: "#a47879" }}
            onClick={handleDeleteButtonClick}
        >
            Удалить
        </Button>
    );

    const SaveButton = () => (
        <Button type="submit" onClick={handleSaveButtonClick}>
            Сохранить
        </Button>
    );

    return (
        <GenericPostForm
            formTitle={`Запись "${post.title}"`}
            titleInputState={titleInputState}
            contentInputState={contentInputState}
            setTitleInputState={setTitleInputState}
            setContentInputState={setContentInputState}
            LeftButton={DeleteButton}
            RightButton={SaveButton}
        />
    );
});

export default EditPostForm;
