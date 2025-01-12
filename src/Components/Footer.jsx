import React from "react";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="px-6 py-8 w-full flex flex-wrap items-center justify-center lg:justify-between">
      <div className="flex gap-6">
        <a
          href="https://github.com/ANSH-JAIN-0210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ansh-jain-b29bb5211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin size={18} />
        </a>
      </div>
      <a className="mt-5 text-gray-600" href="/">
        © Ansh Jain All rights reserved.
      </a>
    </div>
  );
};

export default Footer;
