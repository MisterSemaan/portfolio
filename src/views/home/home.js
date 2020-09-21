import React from 'react'

import { SocialMedia } from '../../components/socialMedia/socialMedia';
import { CallToAction } from '../../components/callToAction/callToAction';

import stackoverflowIcon from '../../assets/socialMedia/stackoverflow.svg';
import githubIcon from '../../assets/socialMedia/github.svg';
import twitterIcon from '../../assets/socialMedia/twitter.svg';
import linkedinIcon from '../../assets/socialMedia/linkedin.svg';

import './home.css';

const socialMedia = [
  {
    socialMediaHref: 'https://stackoverflow.com/users/11019734/gabriel',
    socialMediaAlt: 'Stackoverflow Icon',
    socialMediaSrc: stackoverflowIcon,
  },
  {
    socialMediaHref: 'https://github.com/MisterSemaan',
    socialMediaAlt: 'Github Icon',
    socialMediaSrc: githubIcon,
  },
  {
    socialMediaHref: 'https://twitter.com/home',
    socialMediaAlt: 'Twitter Icon',
    socialMediaSrc: twitterIcon,
  },
  {
    socialMediaHref: 'https://www.linkedin.com/in/gabriel-semaan',
    socialMediaAlt: 'Linkedin Icon',
    socialMediaSrc: linkedinIcon,
  }
];

export const Home = () => {
  return (
    <section id="home">
      <div className="homeWrapper">
        <h1>
          Gabriel Ayham Semaan
          <br/>
          <span>(Web)Fullstack Developer with a passion for a fantastic user experience</span>
        </h1>
        <p>
          I build user interfaces. I write clean code. I write efficient code.
          <br/>
          I have an eye for a good UX, but please don't make me design anything.
        </p>
        <div id="socialMediaWrapper">
          {
            socialMedia.map((value, index) => (
              <SocialMedia
                key={`social-media-wrapper-${index}`}
                socialMediaHref={value.socialMediaHref}
                socialMediaSrc={value.socialMediaSrc}
                socialMediaAlt={value.socialMediaAlt}
              />
            ))
          }
        </div>
        <CallToAction location='/myWork' buttonColor='#24a0ed' textColor='white' buttonText='Check out my work' />
      </div>
    </section>
  )
}