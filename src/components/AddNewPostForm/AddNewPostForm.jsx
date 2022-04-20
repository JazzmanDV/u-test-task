import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import sanitizeTextInputRef from "../../utils/sanitizeTextInputRef";
import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GenericPostForm from "../GenericPostForm/GenericPostForm";

const AddNewPostForm = observer(() => {
    const navigate = useNavigate();

    const titleInputRef = useRef(null);
    const contentInputRef = useRef(null);

    const handleAddButtonClick = () => {
        const title = sanitizeTextInputRef(titleInputRef);
        const content = sanitizeTextInputRef(contentInputRef);

        if (!title || !content) {
            return;
        }

        postsStore.add(title, content);
        navigate("/posts", { replace: true });
    };

    const RightButton = () => (
        <Button type="submit" onClick={handleAddButtonClick}>
            Добавить
        </Button>
    );

    return (
        <GenericPostForm
            formTitle={"Добавление новой записи"}
            titleInputRef={titleInputRef}
            contentInputRef={contentInputRef}
            RightButton={RightButton}
        />
    );
});

export default AddNewPostForm;
