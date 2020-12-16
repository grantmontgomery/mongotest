import React from "react";
import "./Post.css";

export const Post = () => {
  const [state, setState] = React.useState({ title: "", text: "" });

  return (
    <main className="postPageWrapper">
      <section style={{ display: "flex", flexFlow: "column nowrap" }}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={state.title}
          onChange={({ target }) =>
            setState((state) => ({ ...state, title: target.value }))
          }
        />
        <label htmlFor="">Text</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={state.text}
          onChange={({ target }) =>
            setState((state) => ({ ...state, text: target.value }))
          }
        ></textarea>
        <button style={{ marginTop: "50px", height: "50px", width: "100px" }}>
          Submit
        </button>
      </section>
    </main>
  );
};
