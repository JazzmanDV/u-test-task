import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import sanitizeTextInputRef from "../../utils/sanitizeTextInputRef";
import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GenericPostForm from "../GenericPostForm/GenericPostForm";

const EditPostForm = observer(({ post }) => {
    const navigate = useNavigate();

    const titleInputRef = useRef(null);
    const contentInputRef = useRef(null);

    const handleDeleteButtonClick = () => {
        const result = confirm("Удалить запись?");

        if (result) {
            postsStore.delete(post);
            navigate("/posts", { replace: true });
        }
    };

    const handleSaveButtonClick = () => {
        const title = sanitizeTextInputRef(titleInputRef);
        const content = sanitizeTextInputRef(contentInputRef);

        if (!title || !content) {
            return;
        }

        postsStore.update(post, title, content);
        navigate("/posts", { replace: true });
    };

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

    return (
        <GenericPostForm
            formTitle={`Запись "${post.title}"`}
            titleInputDefaultValue={post.title}
            contentInputDefaultValue={post.content}
            titleInputRef={titleInputRef}
            contentInputRef={contentInputRef}
            LeftButton={LeftButton}
            RightButton={RightButton}
        />
    );
});

export default EditPostForm;
