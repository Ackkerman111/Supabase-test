"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Saved Messages</h1>

      {data.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: 15,
            padding: 10,
            background: "#eee",
            borderRadius: "8px"
          }}
        >
          <p><b>ID:</b> {item.id}</p>
          <p><b>Text:</b> {item.text}</p>
          <p><b>Time:</b> {item.created_at}</p>
        </div>
      ))}
    </div>
  );
}