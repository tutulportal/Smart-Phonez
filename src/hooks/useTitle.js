import { useEffect } from "react";

// Title Hook

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Smart Phonez`;
    },[title]);
};

export default UseTitle;
