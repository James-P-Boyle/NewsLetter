import Header from "../Header";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h2>LOGO</h2>
      <Header setQuery={props.setQuery} />
    </div>
  );
}
