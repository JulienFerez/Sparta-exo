import React from "react";
import { uuid } from "uuidv4";

const CardBody = (props) => {
  const [screenshots, setScreen] = React.useState(true);
  function changeStateScreen() {
    if (screenshots === true) {
      return setScreen(props.screenshots.map((img) => <img key={uuid()} src={img.url} />));
    } else {
      setScreen(false);
    }
  }
  return (
    <div>
      <img src={props.cover} />
      <p>{props.firstReleaseDate}</p>
      {props.genres.map((genre) => {
        if (genre.name === undefined) {
          return <p key={uuid()}>{genre}</p>;
        } else {
          return <p key={uuid()}>{genre.name}</p>;
        }
      })}
      <p>{props.summary}</p>
      <button onClick={changeStateScreen}>Show screenshots</button>
      <div>{screenshots}</div>
    </div>
  );
};

export default CardBody;
