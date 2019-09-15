import React from 'react';
import PropTypes from 'prop-types';
import StoryText from './Story.json';

const Story = (prop) => {
  function handleStory() {
    let story
    switch (prop.storyState) {
      case "+":
        story = StoryText.addStory
        break;
      case "-":
        story = StoryText.subStory
        break;
      case "x":
        story = StoryText.multiStory
        break;
      case "___":
        story = StoryText.divStory
        break;
      default:
        story = StoryText.onboard
    }
    return story
  }

  return (
    <div className="Story__Container">
      {handleStory()}
    </div>
  )
}

Story.propTypes = {
  onboard: PropTypes.bool,
  storyState: PropTypes.string
}

export default Story;
