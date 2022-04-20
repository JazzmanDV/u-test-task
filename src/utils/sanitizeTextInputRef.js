const sanitizeTextInputRef = (textInputRef) => {
    const value = textInputRef.current.value.trim();

    if (!value) {
        textInputRef.current.value = "";
    }

    return value;
};

export default sanitizeTextInputRef;
