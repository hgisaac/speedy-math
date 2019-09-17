import React from 'react';
import PropTypes from 'prop-types';
import AchievementsText from './AchievementsTexts.json';

const Achievements = (prop) => {
  function handleAchieve() {
    if (prop.operator === '+' && prop.rightAnswers === 3) {
      return AchievementsText.addAchieve
    } else if (prop.operator === '-' && prop.rightAnswers === 6) {
      return AchievementsText.subAchieve
    } else if (prop.operator === 'x' && prop.rightAnswers === 4) {
      return AchievementsText.multiAchieve
    } else if (prop.operator === '/' && prop.rightAnswers === 5) {
      return AchievementsText.divAchieve
    } else if (prop.operator === '___' && prop.rightAnswers === 10) {
      return AchievementsText.compAchieve
    }
  }

  return (
    <span className="Results__Container">{handleAchieve()}</span>
  )
}

Achievements.propTypes = {
  operator: PropTypes.string,
  rightAnswers: PropTypes.num
}

export default Achievements;
