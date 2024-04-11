import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import Icon from "./Icon";

library.add(fas);

function App() {
  const [randomIcon, setRandomIcon] = React.useState(0);

  const arrFasIcons = Object.keys(library.definitions.fas);
  const iconName = arrFasIcons[randomIcon];

  console.log(arrFasIcons[randomIcon]);
  return (
    <div className="wrapper">
      <Icon randomIcon={randomIcon} arrFasIcons={arrFasIcons} />
      <p className="name">{iconName}</p>
      <Button setRandomIcon={setRandomIcon} arrFasIcons={arrFasIcons} />
    </div>
  );
}

export default App;
