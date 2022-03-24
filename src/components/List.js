import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div className="list">
      {props.dataObj.map((element, index) => {
        return (
          <ListItem
            key={element.objectID}
            title={element.title}
            url={element.url}
            author={element.author}
          />
        );
      })}
    </div>
  );
}
