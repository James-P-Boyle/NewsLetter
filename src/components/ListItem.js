export default function ListItem(props) {
  console.log(props);
  return (
    <div className="listItem" /* key={props.id} */>
      <h2>{props.title}</h2>
      <p>Author {props.author}</p>
      <a href="#">{props.url}</a>
    </div>
  );
}
