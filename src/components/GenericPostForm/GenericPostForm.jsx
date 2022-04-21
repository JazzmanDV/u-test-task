import React from "react";
import { observer } from "mobx-react-lite";

import styles from "./GenericPostForm.module.css";

const GenericPostForm = observer(
    ({
        formTitle = "Заголовок формы",
        titleInputState,
        contentInputState,
        setTitleInputState,
        setContentInputState,
        LeftButton,
        RightButton,
    }) => {
        const handleSubmit = (e) => {
            e.preventDefault();
        };

        const onTitleInputChange = (e) => {
            setTitleInputState(e.target.value);
        };

        const onContentInputChange = (e) => {
            setContentInputState(e.target.value);
        };

        return (
            <div className={styles.formWrapper}>
                <h3 className={styles.title}>{formTitle}</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Введите заголовок"
                        required
                        value={titleInputState}
                        onChange={onTitleInputChange}
                    />
                    <textarea
                        placeholder="Введите текст"
                        rows={10}
                        required
                        value={contentInputState}
                        onChange={onContentInputChange}
                    ></textarea>
                    <div className={styles.buttonsWrapper}>
                        {LeftButton && <LeftButton />}
                        {RightButton && <RightButton />}
                    </div>
                </form>
            </div>
        );
    }
);
export default GenericPostForm;
