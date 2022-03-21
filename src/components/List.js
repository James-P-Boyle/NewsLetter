import ListItem from "./ListItem";

export default function List(props) {
  /* console.log(props.dataObj.hits[1].title); */
  return (
    <div className="list">
      {props.dataObj.map((element, index) => {
        return (
          <ListItem
            key={element.id}
            title={element.title}
            url={element.url}
            author={element.author}
          />
        );
      })}
    </div>
  );
}
