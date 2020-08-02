import React from 'react';

import { SocialMedia } from "../../components/socialMedia/socialMedia";

import githubIcon from '../../assets/socialMedia/github.svg';
import stackoverflowIcon from '../../assets/socialMedia/stackoverflow.svg';
import twitterIcon from '../../assets/socialMedia/twitter.svg';
import linkedinIcon from '../../assets/socialMedia/linkedin.svg';

import './home.css';

const socialMedia = [
  {
    socialMediaHref: 'https://github.com/MisterSemaan',
    socialMediaAlt: 'Github Icon',
    socialMediaSrc: githubIcon,
  },
  {
    socialMediaHref: 'https://stackoverflow.com/users/11019734/gabriel',
    socialMediaAlt: 'Stackoverflow Icon',
    socialMediaSrc: stackoverflowIcon,
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

const description = `
I build user interfaces. 
I write clean code. I write efficient code. I have an eye for a good UX, but please don't make me design anything.
`;


export const Home = () => {
  return (
    <section id="home">
      <div className="homeWrapper">
        <h1>
          Gabriel Ayham Semaan <br/> <span>(Web)Fullstack Developer with a passion for a fantastic user experience</span>
        </h1>
        <p>{description}</p>
        <div id="socialMediaWrapper">
          {
            socialMedia.map((value, index) => {
              return <SocialMedia key={index} socialMediaHref={value.socialMediaHref} socialMediaSrc={value.socialMediaSrc} socialMediaAlt={value.socialMediaAlt} />
            })
          }
        </div>
      </div>
    </section>
  )
}