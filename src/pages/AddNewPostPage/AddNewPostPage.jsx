import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

import postsStore from "../../store/postsStore.js";
import Button from "../../components/Button/Button";
import GeneralPostForm from "../../components/GeneralPostForm/GeneralPostForm";

const AddNewPostPage = observer(() => {
    const navigate = useNavigate();

    const inputTitleRef = useRef(null);
    const inputContentRef = useRef(null);

    const LeftButton = () => (
        <Link to="/">
            <Button>Отмена</Button>
        </Link>
    );

    const RightButton = () => (
        <Button type="submit" onClick={handleAddButtonClick}>
            Добавить
        </Button>
    );

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
        <GeneralPostForm
            formTitle={"Добавление новой записи"}
            inputTitleRef={inputTitleRef}
            inputContentRef={inputContentRef}
            LeftButton={LeftButton}
            RightButton={RightButton}
        />
    );
});

export default AddNewPostPage;
