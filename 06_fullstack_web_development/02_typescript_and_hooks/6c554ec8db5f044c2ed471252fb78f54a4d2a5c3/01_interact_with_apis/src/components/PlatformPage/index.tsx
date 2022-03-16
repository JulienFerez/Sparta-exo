import React from "react";

const PlatformPage = (): JSX.Element => {
  const [platform, setPlatform] = React.useState(null);
  const [game, setGames] = React.useState(null);

  React.useEffect(() => {
    fetch("http://videogame-api.fly.dev/platforms")
      .then((response) => response.json())
      .then((platform) => setPlatform(platform));
  }, []);

  React.useEffect(() => {
    fetch("http://videogame-api.fly.dev/games")
      .then((response) => response.json())
      .then((games) => setGames(games));
  }, []);

  return <>{{ platform } ? { platform } : "Loading..."}</>;
};

export default PlatformPage;
