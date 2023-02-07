import React from "react";
import { OptionContainer } from "../Styles";

const Option = ({ color, src, alt, pickOption }) => {
  return (
    <OptionContainer
      // className="main__option"
      marginColor={color}
      onClick={() => pickOption(alt)}
    >
      <img
        style={{
          width: "200%",
          height: "auto",
        }}
        src={src}
        alt={alt}
      />
    </OptionContainer>
  );
};

export default Option;
