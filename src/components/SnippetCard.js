import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function SnippetCard({ snippet }) {
  return (
    <div className="snippet-card">
      <h3>{snippet.name}</h3>
      <SyntaxHighlighter language={snippet.lang} style={dracula}>
        {snippet.content}
      </SyntaxHighlighter>
    </div>
  );
}

export default SnippetCard;








