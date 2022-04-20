import React from "react";
import { observer } from "mobx-react-lite";

import styles from "./GenericPostForm.module.css";

const GenericPostForm = observer(
    ({
        formTitle = "Заголовок формы",
        titleInputDefaultValue = "",
        contentInputDefaultValue = "",
        titleInputRef = null,
        contentInputRef = null,
        LeftButton,
        RightButton,
    }) => {
        const handleSubmit = (e) => {
            e.preventDefault();
        };

        return (
            <div className={styles.formWrapper}>
                <h3 className={styles.title}>{formTitle}</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Введите заголовок"
                        defaultValue={titleInputDefaultValue}
                        required
                        ref={titleInputRef}
                    />
                    <textarea
                        placeholder="Введите текст"
                        defaultValue={contentInputDefaultValue}
                        rows={10}
                        required
                        ref={contentInputRef}
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
