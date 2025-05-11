import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDesc(e.target.value)}
        ></input>

        <button
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                desc: desc,
              }),
              headers: {
                "content-type": "application/json",
              },
            });
          }}
        >
          Add TODO
        </button>
      </div>
    </>
  );
}
