import Header from "../Header";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Header setQuery={props.setQuery} />
    </div>
  );
}
