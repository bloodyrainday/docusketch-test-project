import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ randomIcon, arrFasIcons }) => {
  return (
    <>
      <FontAwesomeIcon icon={["fas", `${arrFasIcons[randomIcon]}`]} />
    </>
  );
};

export default Icon;
