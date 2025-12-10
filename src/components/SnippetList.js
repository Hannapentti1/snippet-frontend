import SnippetCard from "./SnippetCard";

function SnippetList({ snippets, onDelete }) {
  if (!snippets.length) return <p>No snippets available.</p>;

  return (
    <div>
      {snippets.map((snippet) => (
        <SnippetCard key={snippet._id} snippet={snippet} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default SnippetList;

