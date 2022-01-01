import React from 'react';
import PropTypes from 'prop-types';

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

CharacterCount.propTypes = {
  cell: PropTypes.string.isRequired,
};

export default CharacterCount;
