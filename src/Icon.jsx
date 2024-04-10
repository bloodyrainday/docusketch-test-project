import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const iconStyles = ["fab", "fas", "far"];

const chooseIconStyle = () => {
  return [
    iconStyles[Math.round(Math.random() * 3)],
    arrFabIcons[Math.round(Math.random() * 3)],
  ];
};

// for (let keys in library.definitions.fab) {
//   console.log(keys);
// }
const arrFabIcons = Object.keys(library.definitions.fab);
const arrFasIcons = Object.keys(library.definitions.fas);
const arrFarIcons = Object.keys(library.definitions.far);
console.log(arrFabIcons, arrFasIcons, arrFarIcons);

const Icon = ({ randomIcon }) => {
  return (
    <>
      {}
      <FontAwesomeIcon
        icon={[`${iconStyles[0]}`, `${arrFabIcons[randomIcon]}`]}
      />
    </>
  );
};

export default Icon;
