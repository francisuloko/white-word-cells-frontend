import React from "react";

const CharacterCount = (props) => {
  const charLen = 300;
  return <span>{charLen - props.story.length}</span>;
};

export { CharacterCount };
