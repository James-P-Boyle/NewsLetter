import "./App.css";
import Header from "./Header";
import List from "./components/List";
import Data from "./data.json";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log(Data.hits);
  useEffect(() => {
    setData(Data.hits);
  }, []);
  return (
    <div className="App">
      <Header />
      <List dataObj={data} />
    </div>
  );
}

export default App;
