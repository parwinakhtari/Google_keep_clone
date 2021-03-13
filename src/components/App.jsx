import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);

  function handleNote(event) {
    if (event.target.name === "title") {
      const newTitle = event.target.value;
      setNote((prevItems) => {
        return { ...prevItems, title: newTitle };
      });
    } else if (event.target.name === "content") {
      const newContent = event.target.value;
      setNote((prevItems) => ({ ...prevItems, content: newContent }));
    }
  }

  function addNote() {
    setNotes((prevItems) => {
      return [...prevItems, note];
    });
    setNote({ title: "", content: "" });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        change={handleNote}
        title={note.title}
        content={note.content}
        add={addNote}
      />
      {notes.map((note, index) => (
        <Note
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
