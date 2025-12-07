"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const saveText = async () => {
    const { data, error } = await supabase
      .from("messages")
      .insert([{ text }]);

    if (error) {
      setMessage("Error saving: " + error.message);
    } else {
      setMessage("Saved successfully!");
      setText("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Save Text to Supabase</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ width: "300px", height: "120px", padding: 10 }}
      />

      <br /><br />
      <button
        onClick={saveText}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Save
      </button>

      <p>{message}</p>
    </div>
  );
}