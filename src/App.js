import "./App.css";
import Header from "./Header";
import List from "./components/List";
import Data from "./data.json";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => setData(response.data.hits))
      .catch((error) => console.log(error));
  }, [query]);
  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <List dataObj={data} />
    </div>
  );
}

export default App;
