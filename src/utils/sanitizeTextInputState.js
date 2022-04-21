const sanitizeTextInputState = (textInputState, setTextInputState) => {
    const value = textInputState.trim();

    if (!value) {
        setTextInputState("");
    }

    return value;
};

export default sanitizeTextInputState;
