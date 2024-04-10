import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const iconStyles = ["fab", "fas", "far"];

const arrFabIcons = Object.keys(library.definitions.fab);
const arrFasIcons = Object.keys(library.definitions.fas);
const arrFarIcons = Object.keys(library.definitions.far);

const Button = ({ randomIcon, setRandomIcon }) => {
  return (
    <div>
      <button
        onClick={() =>
          setTimeout(
            () => setRandomIcon(Math.floor(Math.random() * arrFabIcons.length)),
            3000
          )
        }
      >
        change icon
      </button>
    </div>
  );
};

export default Button;
