import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]); //Startwete, die gerendert werden
  function handleAddTag(newTag) {
    setTags((prevTags) => {
      const updatedTags = [...prevTags, newTag];
      return updatedTags;
    });
  }
  function handleDeleteTag(tagToDelete) {
    setTags(
      tags.filter((tag) => {
        return tag !== tagToDelete;
      })
    );
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
