import React from 'react';
import PropTypes from 'prop-types';

const Story = (prop) => {
  return (
    <div className="Story__Container">Hello</div>
  )
}

Story.propTypes = {
  storyState: PropTypes.string
}

export default Story;
