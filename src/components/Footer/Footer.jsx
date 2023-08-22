import { MarkGithubIcon } from "@primer/octicons-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/MarkoDavkovski"
        target="blank"
        className="github-link"
      >
        <div className="icon-container">
          <MarkGithubIcon size={20} ariaLabel="GitHub Logo" />
        </div>
      </a>
      DavkoWeb &copy; 2023
    </footer>
  );
};

export default Footer;
