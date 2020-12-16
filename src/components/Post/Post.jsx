import React from "react";
import "./Post.css";

export const Post = () => {
  const [fields, setFields] = React.useState({ title: "", text: "" });
  const [loading, setLoading] = React.useState(false);
  const handlePostSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000", {
        headers: {
          Accept: "application/json",
          "Content-Type": "applicaiton/json",
        },
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          title: fields.title,
          text: fields.text,
        }),
      });

      const responseJSON = await response.json();
      console.log(responseJSON);

      return responseJSON;
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      return error;
    }
  };

  return (
    <main className="postPageWrapper">
      <section style={{ display: "flex", flexFlow: "column nowrap" }}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={fields.title}
          onChange={({ target }) =>
            setFields((state) => ({ ...state, title: target.value }))
          }
        />
        <label htmlFor="">Text</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={fields.text}
          onChange={({ target }) =>
            setFields((state) => ({ ...state, text: target.value }))
          }
        ></textarea>
        <button
          style={{ marginTop: "50px", height: "50px", width: "100px" }}
          onClick={handlePostSubmit}
        >
          Submit
        </button>
      </section>
    </main>
  );
};
