import React from "react";

const GetGames = () => {
  React.useEffect(() => {
    fetch("http://videogame-api.fly.dev/games")
      .then((result) => result.json())
      .then((res) => console.log(res));
    return () => {
      console.log("Line9");
    };
  }, []);
  return <p>Platform</p>;
};

export default GetGames;
