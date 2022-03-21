export default function ListItem(props) {
  return (
    <div className="listItem">
      <h2>{props.title}</h2>
      <p>{props.url}</p>
      <a href="#">{props.author}</a>
    </div>
  );
}
