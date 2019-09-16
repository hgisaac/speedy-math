import React from 'react';
import PropTypes from 'prop-types';

const Achievements = (prop) => {
  function handleAchieve() {
    if (prop.achieve) {
      return 'hello'
    }
  }

  return (
    <div className="Results__Container">{handleAchieve()}</div>
  )
}

Achievements.propTypes = {
  achieve: PropTypes.bool
}

export default Achievements;
