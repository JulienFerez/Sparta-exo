import React from "react";

type Platform = {
  name: string;
  id: string;
};

type Games = {
  name: string;
  id: string;
};

const PlatformPage = (): JSX.Element => {
  const [platform, setPlatform] = React.useState([]);
  const [game, setGames] = React.useState([]);
  const [idPlatform, setidPlatform] = React.useState("");
  const [idGame, setidGame] = React.useState("");

  React.useEffect(() => {
    fetch("http://videogame-api.fly.dev/platforms")
      .then((response) => response.json())
      .then((result) => {
        const arrayOfPlatform = result.platforms.map((platform: Platform) => {
          return { name: platform.name, id: platform.id };
        });
        setPlatform(arrayOfPlatform);
      });
  }, []);

  React.useEffect(() => {
    fetch(`http://videogame-api.fly.dev/games/platforms/${idPlatform}`)
      .then((response) => response.json())
      .then((result) => {
        const arrayOfGames = result.games.map((games: Games) => {
          return { name: games.name, id: games.id };
        });
        setGames(arrayOfGames);
      });
  }, [idPlatform]);

  // Display details of games
  React.useEffect(() => {
    console.log(idGame);
    fetch(`
    http://videogame-api.fly.dev/games/${idGame}`)
      .then((response) => response.json())
      .then((result) => {
        const arrayOfGames = result.games.map((games: Games) => {
          return { name: games.name, id: games.id };
        });
        setGames(arrayOfGames);
      });
  }, [idGame]);

  return (
    <>
      <select onChange={(event) => setidPlatform(event.target.options[event.target.selectedIndex].id)}>
        {platform?.map((element: any) => (
          <option key={element.id} id={element.id}>
            {element.name}
          </option>
        ))}
      </select>
      <select onChange={(event) => setidGame(event.target.options[event.target.selectedIndex].id)}>
        {game?.map((element: any) => (
          <option key={element.id} id={element.id}>
            {element.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default PlatformPage;
