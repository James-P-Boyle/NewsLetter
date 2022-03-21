import "./App.css";
import Header from "./Header";
import List from "./components/List";
import Data from "./data.json";

function App() {
  return (
    <div className="App">
    <Header />
    <List dataObj={Data} />
    </div>
  );

}

export default App;
