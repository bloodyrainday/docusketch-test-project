import React from "react";

import Button from "./Button";
import Icon from "./Icon";

function App() {
  const [randomIcon, setRandomIcon] = React.useState(0);
  return (
    <div className="App">
      <Icon randomIcon={randomIcon} />
      <Button randomIcon={randomIcon} setRandomIcon={setRandomIcon} />
    </div>
  );
}

export default App;
