import React from 'react';

import './callToAction.css';

export const CallToAction = ({ buttonColor, textColor, buttonText, location }) => {
  return (
    <a className="callToActionButton" href={location} style={{ backgroundColor: buttonColor, color: textColor }}>
      {buttonText}
    </a>
  )
}