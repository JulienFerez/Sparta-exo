import React from "react";

const CardHeader = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.platformLogos.map((platform) => {
        if (platform.name === undefined) {
          return <img src={platform} />;
        } else {
          return <img src={platform.platform_logo.url} />;
        }
      })}
    </div>
  );
};

export default CardHeader;
