export default function ListItem(props) {
  return (
    <div className="listItem" /* key={props.id} */>
      <h2>{props.title}</h2>
      <p>Written by {props.author}</p>
      <a href="#">{props.url}</a>
    </div>
  );
}
