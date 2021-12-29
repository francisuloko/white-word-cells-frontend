import React from 'react';

const CharacterCount = (props) => {
  const { cell } = props;
  const charLen = 300 - cell.story.length;

  return (
    <div className="ms-auto px-3">
      {charLen < 0 ? (
        <span className="text-danger">{charLen}</span>
      ) : (
        <>{charLen}</>
      )}
    </div>
  );
};

export { CharacterCount };
