import HTMLSide from "./components/HTML_Side";
import MarkdownSide from "./components/Markdown_Side";
import "./App.scss";
import { useRef, useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [text, setText] = useState("");
  const [divition, setDivition] = useState(50);
  const containerRef = useRef();
  const mouseDragging = useRef(false);

  function handleMouseDown() {
    mouseDragging.current = true;
  }

  function handleMouseUp() {
    mouseDragging.current = false;
  }

  function handleMouseMove(e) {
    if (mouseDragging.current) {
      const minWidth = 20;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      if (newPosition >= minWidth && newPosition <= 100 - minWidth) {
        setDivition(newPosition);
      }
    }
  }

  return (
    <>
      <Header setText={setText}/>
      <div
        className="container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <MarkdownSide
          text={text}
          setText={setText}
          style={{ width: `${divition}%` }}
        />
        <div className="divider" onMouseDown={handleMouseDown} />
        <HTMLSide text={text} style={{ width: `${100 - divition}%` }} />
      </div>
    </>
  );
}

export default App;
