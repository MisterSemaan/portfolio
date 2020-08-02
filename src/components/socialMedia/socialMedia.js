import React from 'react';

import './socialMedia.css';

export const SocialMedia = ({ socialMediaHref, socialMediaSrc, socialMediaAlt}) => {
  return (
    <a href={socialMediaHref}>
      <img className="socialMediaimg" src={socialMediaSrc} alt={socialMediaAlt} />
    </a>
  )
}