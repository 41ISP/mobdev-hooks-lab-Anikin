import { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    const trimmed = title.trim();
    if (trimmed === "") return;
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <div className="add-book-row">
      <input
        className="input"
        id="bookInput"
        type="text"
        placeholder="Название книги..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
      />
      <button
        className="btn"
        id="addBtn"
        type="button"
        onClick={handleSubmit}
      >
        Добавить на полку
      </button>
    </div>
  );
}