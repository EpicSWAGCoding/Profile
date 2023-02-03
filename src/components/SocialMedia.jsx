import React from 'react';
import { BsGithub, BsTelegram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
        <a target="_blank" href='https://github.com/EpicSWAGCoding'>
            <BsGithub />
        </a>
    </div>
    <div>
        <a target="_blank" href='https://t.me/ZOLOTO395'>
            <BsTelegram />
        </a>
    </div>
  </div>
);

export default SocialMedia;