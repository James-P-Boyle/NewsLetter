import "./App.css";
import List from "./components/List";
import Data from "./data.json";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => setData(response.data.hits))
      .catch((error) => console.log(error));
  }, [query]);
  return (
    <div className="App">
      <Navbar setQuery={setQuery} />
      <List dataObj={data} />
    </div>
  );
}

export default App;
