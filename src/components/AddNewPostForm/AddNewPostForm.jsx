import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import sanitizeTextInputState from "../../utils/sanitizeTextInputState";
import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GenericPostForm from "../GenericPostForm/GenericPostForm";

const AddNewPostForm = observer(() => {
    const navigate = useNavigate();

    const [titleInputState, setTitleInputState] = useState("");
    const [contentInputState, setContentInputState] = useState("");

    const handleAddButtonClick = () => {
        const title = sanitizeTextInputState(titleInputState, setTitleInputState);
        const content = sanitizeTextInputState(contentInputState, setContentInputState);

        if (!title || !content) {
            return;
        }

        postsStore.add(title, content);
        navigate("/posts", { replace: true });
    };

    const AddButton = () => (
        <Button type="submit" onClick={handleAddButtonClick}>
            Добавить
        </Button>
    );

    return (
        <GenericPostForm
            formTitle={"Добавление новой записи"}
            titleInputState={titleInputState}
            contentInputState={contentInputState}
            setTitleInputState={setTitleInputState}
            setContentInputState={setContentInputState}
            RightButton={AddButton}
        />
    );
});

export default AddNewPostForm;
