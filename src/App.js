import "./App.css";
import List from "./components/List";
import Data from "./data.json";

function App() {
  return (
    <div className="App">
      <List dataObj={Data} />
    </div>
  );
}

export default App;
