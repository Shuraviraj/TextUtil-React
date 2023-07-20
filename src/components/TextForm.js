import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnChange = async (event) => {
    setText(event.target.value);
    let newLen = 0;
    const reg = /^[A-Za-z]*$/;
    for (let c in event.target.value) if (reg.test(event.target.value[c])) newLen++;

    setLength(newLen);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClear = () => {
    if (window.confirm("are you sure you want to clear the text?")) {
      setText("");
      props.showAlert("CLeared Test", "success");
    } else {
      props.showAlert("failed to clear", "warning");
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text successfully", "success");
  };
  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space removed", "success");
  };

  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "light" ? "black" : "#ffff99",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="d-flex flex-row justify-content-between">
          <div className="form-outline w-50 mb-3 my-3">
            <textarea
              className="form-control my-3 vw-75"
              value={text}
              placeholder="Enter Text Here"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#13466e",
                color: props.mode === "light" ? "black" : "white",
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <div
            className="card my-3 mx-5 px-5 py-3 border-3 border-success-subtle rounded-5"
            style={{
              color: props.mode === "light" ? "black" : "#ffff99",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
          >
            <h5 className="card-title">
              Letter Count <strong>excluding space</strong> : <span className="text-primary">{length}</span>
            </h5>
            <h5>
              Letter Count <strong>including space</strong> : <span className="text-primary">{text.length}</span>
            </h5>
            <h5>
              Word Count : <span className="text-primary">{text.split(/\s+/).filter((e) => e.length !== 0).length}</span>
            </h5>
            <h5>
              Paragraph can be read in : <span className="text-primary">{text === "" ? 0 : 0.008 * text.split(" ").length}</span> min(s)
            </h5>
          </div>
        </div>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleClear} disabled={text.length === 0}>
          Clear
        </button>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}>
          Copy
        </button>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleSpace} disabled={text.length === 0}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "#ffff99",
        }}
      >
        <h2>Preview</h2>
        <p>{text > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
