import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const API_ADD = "https://project2-4-tih3.onrender.com/api/add";

function AddSnippetForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", language: "javascript", code: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await fetch(API_ADD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", language: "javascript", code: "", description: "" });
    onAdd();
  };

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <h2>Add Snippet</h2>
      <form onSubmit={submit}>
        <input name="title" placeholder="Title" onChange={handleChange} value={form.title} required />
        <input name="language" placeholder="Language" onChange={handleChange} value={form.language} />
        <textarea name="code" placeholder="Code" onChange={handleChange} value={form.code} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} />
        <button type="submit">Add Snippet</button>
      </form>

      <h3>Live Preview</h3>
      <SyntaxHighlighter language={form.language} style={vscDarkPlus}>
        {form.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default AddSnippetForm;
