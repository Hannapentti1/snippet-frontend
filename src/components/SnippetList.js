import SnippetCard from "./SnippetCard";

function SnippetList({ snippets }) {
  return (
    <div>
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id || snippet._id}
          snippet={snippet}
        />
      ))}
    </div>
  );
}

export default SnippetList;







