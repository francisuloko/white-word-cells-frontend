/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterCount = (props) => {
  const { desc } = props;
  const charLen = 300 - desc.length;

  return (
    <div className="px-3">
      {charLen < 0 ? (
        <span className="text-danger">{charLen}</span>
      ) : (
        <span className="text-secondary">{charLen}</span>
      )}
    </div>
  );
};

CharacterCount.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default CharacterCount;
