import React from "react";
import { observer } from "mobx-react-lite";

import styles from "./GenericPostForm.module.css";

const GenericPostForm = observer(
    ({
        formTitle = "Заголовок формы",
        titleDefaultValue = "",
        contentDefaultValue = "",
        inputTitleRef,
        inputContentRef,
        LeftButton,
        RightButton,
    }) => {
        const handleSubmit = (e) => {
            e.preventDefault();
        };

        return (
            <div className={styles.postForm}>
                <h3 className={styles.title}>{formTitle}</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Введите заголовок"
                        defaultValue={titleDefaultValue}
                        required
                        ref={inputTitleRef}
                    />
                    <textarea
                        placeholder="Введите текст"
                        defaultValue={contentDefaultValue}
                        rows={10}
                        required
                        ref={inputContentRef}
                    ></textarea>
                    <div className={styles.buttonsWrapper}>
                        <LeftButton />
                        <RightButton />
                    </div>
                </form>
            </div>
        );
    }
);
export default GenericPostForm;
