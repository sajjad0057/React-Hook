import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect Called and Update title");
    document.title = `You clicked ${count}`;
  });

  return (
    <div className="container">
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-secondary btn-lg mt-2"
      >
        Count : {count}
      </button>
      <div class="shadow-none p-3 mb-5 bg-light rounded mt-2">
        <input
          type="text"
          placeholder="Type Your Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        Your name : <i>{name}</i>
      </div>
    </div>
  );
};

export default ChangeTitle;
