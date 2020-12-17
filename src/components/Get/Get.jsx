import React from "react";

export const Get = () => {
  const [loading, setLoading] = React.useState(false);
  const [fields, setFields] = React.useState({ title: "" });
  const [data, setData] = React.useState("Type in a title to receive results!");

  const handleGetSubmit = async () => {
    setLoading(true);
    try {
      const { title } = fields;

      const response = await fetch("http://localhost:8000/get", {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify({
          title,
        }),
      });
      const responseJSON = await response.json();
      console.log(responseJSON);
      setLoading(false);
      setData(responseJSON.text);
    } catch {
      setLoading(false);
    }
  };

  return (
    <main className="getPageWrapper">
      <section style={{ display: "flex", flexFlow: "column nowrap" }}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={fields.title}
          onChange={({ target }) => setFields({ title: target.value })}
        />
        <label htmlFor="">Results</label>
        <p>{loading ? "Loading" : data}</p>
        <button
          style={{ marginTop: "50px", height: "50px", width: "100px" }}
          onClick={handleGetSubmit}
        >
          Submit
        </button>
      </section>
    </main>
  );
};
