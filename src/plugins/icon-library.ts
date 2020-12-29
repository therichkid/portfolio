import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faIndustry, faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinkedin,
  faNode,
  faPython,
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

      // Brands
      faGithub,
      faLinkedin,
      faJs,
      faHtml5,
      faCss3,
      faSass,
      faPython,
      faJava,
      faAngular,
      faBootstrap,
      faNode,
      faWordpress
    );

    dom.watch();
  }
};
