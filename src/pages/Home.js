import { useState, useEffect, useCallback } from "react";
import SnippetList from "../components/SnippetList";
import AddSnippetForm from "../components/AddSnippetForm";

const API_URL = "https://project2-4-tih3.onrender.com/api/getall";

function Home() {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("");

  const fetchSnippets = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const url = language ? `${API_URL}?lang=${language}` : API_URL;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch snippets");
      const data = await res.json();
      setSnippets(data);
    } catch (err) {
      setError("Failed to load snippets");
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    fetchSnippets();
  }, [fetchSnippets]);

  return (
    <div className="container">
      <h1>Developer Knowledge Base</h1>

      {/* Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="languageFilter">Filter by language: </label>
        <select
          id="languageFilter"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">All</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      {/* Add snippet form */}
      <AddSnippetForm onAdd={fetchSnippets} />

      {/* States */}
      {loading && <p>Loading snippets...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Snippet list */}
      {!loading && !error && (
        <SnippetList snippets={snippets} onDelete={fetchSnippets} />
      )}
    </div>
  );
}

export default Home;

