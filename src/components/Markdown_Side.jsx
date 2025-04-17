import { useRef } from "react";
import "./markdown.scss";

function MarkdownSide({ text, setText, style }) {
  const keyPressed = useRef("");
  const textareaRef = useRef();

  function changeText(e) {
    let text = e.target.value;
    const brackets = {
      "(": ")",
      "[": "]",
      "{": "}",
      "'": "'",
      '"': '"',
      "`": "`",
    };

    const open = keyPressed.current;
    const close = brackets[open];
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = text.substring(0, start) + close + text.substring(end);

    if (brackets[open]) {
      setText(newValue);
      requestAnimationFrame(() => {
        textarea.setSelectionRange(start, start);
      });
    } else setText(text);
  }

  function handleKeyPress(e) {
    keyPressed.current = e.key;
  }

  return (
    // <div className="src">
    <textarea
      ref={textareaRef}
      spellCheck={false}
      name="markdown"
      id="markdown"
      style={style}
      onChange={changeText}
      onKeyDown={handleKeyPress}
      value={text}
      autoFocus={true}
      placeholder="write here or upload file..."
    ></textarea>
    // </div>
  );
}
export default MarkdownSide;
