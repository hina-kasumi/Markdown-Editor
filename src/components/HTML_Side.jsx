import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // hoặc `light` nếu bạn muốn tối ưu
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./result.scss";

function HTMLSide({ text = "", style }) {
  function code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        {...props}
        children={children}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="result" style={style}>
      <Markdown remarkPlugins={[remarkGfm]} components={{ code: code }}>
        {text}
      </Markdown>
    </div>
  );
}

export default HTMLSide;
