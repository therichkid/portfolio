import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faEnvelope,
  faExpandArrowsAlt,
  faGlobe,
  faIndustry,
  faMobile,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNode,
  faPhp,
  faSass,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";

export default {
  install: () => {
    library.add(
      // Solid
      faUser,
      faIndustry,
      faEnvelope,
      faMobile,
      faExpandArrowsAlt,
      faGlobe,
      faCode,

      // Brands
      faGithub,
      faLinkedin,
      faJs,
      faHtml5,
      faCss3,
      faSass,
      faPhp,
      faAngular,
      faBootstrap,
      faNode,
      faGitAlt,
      faWordpress
    );

    dom.watch();
  }
};
