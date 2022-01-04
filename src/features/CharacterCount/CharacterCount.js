/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterCount = (props) => {
  const { cell } = props;
  const charLen = 300 - cell.description.length;

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
  cell: PropTypes.isRequired,
};

export default CharacterCount;
