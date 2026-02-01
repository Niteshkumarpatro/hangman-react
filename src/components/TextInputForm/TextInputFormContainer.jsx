import { useState } from "react";
import TextInputForm from "./TextInputForm";

// container component for TextInputForm

function TextInputFormContainer({ onSubmit }) {
    const [value, setValue] = useState("");
    const [inputType, setInputType] = useState("password");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("form Submitted", value);
        onSubmit?.(value); // if  the submit is defined,call it wih the value
    }

    function handleTextInputChange(event) {
        console.log("text input changed");
        console.log(event.target.value);
        setValue(event.target.value); // whenever I type in the input field,it will update the value
    }
    return (
        // calling the presentation layer
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    );
}

export default TextInputFormContainer;
