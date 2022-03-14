import React from "react";

export const HideOrNotHide = () => {
  // Code here

  let [showtext, setShowtext] = React.useState(true);
  if (showtext) {
    return (
      <div>
        <button onClick={() => setShowtext((showtext = false))}>Paragraphe invisible</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque sunt mollitia quam? Delectus
          voluptatem voluptates a magnam totam reiciendis, molestias, omnis veniam alias nemo atque repudiandae!
          Asperiores, voluptate explicabo.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setShowtext((showtext = true))}>Paragraphe visible</button>
      </div>
    );
  }
};
