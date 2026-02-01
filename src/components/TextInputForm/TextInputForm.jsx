import Button from "../Button/button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";

// presentation component



function TextInputForm({ handleFormSubmit, handleTextInputChange, value, inputType = "text", setInputType }) {
  const [toggle, setToggle] = useState(false);


  return (
    <form className="flex items-end " onSubmit={handleFormSubmit}>
      <div className="flex-1 mr-2">
        <TextInput
          label="Enter a word or phrase"
          type={inputType}
          value={value}
          onChange={handleTextInputChange}
        />
      </div>
      <div>
        <Button
          buttonType="button"
          styleType="warning"
          style={{ backgroundColor: "blue" }}
          text={inputType === "password" ? "show" : "Hide"}
          onClickHandler={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        />
      </div>

      <div>
        <Button text="ok" buttonType="submit" />
      </div>

      <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            setToggle(!toggle)
          }}
          style={{ backgroundColor: toggle ? "red" : "blue" }}
        >
          hey
        </button>
      </div>
    </form>
  );
}

export default TextInputForm;
