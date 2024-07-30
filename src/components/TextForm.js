import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Text changed to uppercase successfully.', 'success');
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Text changed to lowercase successfully.', 'success');
  };

  const handleSplitClick = () => {
    setText(text.replaceAll('.', '\n'));
    props.showAlert('Text splitted to new line successfully.', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showAlert('Text cleared successfully.', 'success');
  };

  const handleCopy = () => {
    const text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied successfully.', 'success');
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed from text successfully.', 'success');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        color: props.mode === 'dark' ? 'white' : 'black',
      }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSplitClick}>
          Split to New line
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra space
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.length ? text.trim().split(' ').length : 0} words and{' '}
          {text.length} characters
        </p>
        <p>{text.length ? 0.008 * text.split(' ').length : 0} min read</p>
      </div>
      <div className="container my-3">
        <h2>Preview</h2>
        <p>
          {text?.length
            ? text
            : 'Enter something to the above textarea to preview it here.'}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
