import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GenericPostForm from "../GenericPostForm/GenericPostForm";

const AddNewPostForm = observer(() => {
    const navigate = useNavigate();

    const titleInputRef = useRef(null);
    const contentInputRef = useRef(null);

    const handleAddButtonClick = () => {
        const title = titleInputRef.current.value.trim();
        const content = contentInputRef.current.value.trim();

        if (!title || !content) {
            return;
        }

        postsStore.add(title, content);
        navigate("posts", { replace: true });
    };

    const LeftButton = () => (
        <Link to="/posts">
            <Button>Отмена</Button>
        </Link>
    );

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
            LeftButton={LeftButton}
            RightButton={RightButton}
        />
    );
});

export default AddNewPostForm;
