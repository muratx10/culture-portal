import React from "react";

import footerStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.footerMask}>Creators: </p>
      <ul>
        <li>
          <a href="https://github.com/muratx10" target="_blank">
            <img src="https://avatars0.githubusercontent.com/u/37935564?s=400&v=4" alt="muratx10" />
          </a>
        </li>
        <li>
          <a href="https://github.com/pavelokun" target="_blank">
            <img
              src="https://avatars0.githubusercontent.com/u/53091213?s=460&v=4"
              alt="pavelokun"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/dermeister" target="_blank">
            <img
              src="https://avatars2.githubusercontent.com/u/39797832?s=460&v=4"
              alt="dermeister"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/yuskivpm" target="_blank">
            <img src="https://avatars1.githubusercontent.com/u/58133687?s=460&v=4" alt="yuskivpm" />
          </a>
        </li>
        <li>
          <a href="https://github.com/olegmalyarenko" target="_blank">
            <img
              src="https://avatars3.githubusercontent.com/u/48599025?s=460&v=4"
              alt="olegmalyarenko"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/ineg22" target="_blank">
            <img src="https://avatars3.githubusercontent.com/u/49589225?s=460&v=4" alt="ineg22" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
