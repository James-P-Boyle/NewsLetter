import { useState } from "react";

export default function Header(props) {
  const [input, setInput] = useState("");

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button onClick={() => props.setQuery(input)}>Search</button>
    </div>
  );
}
