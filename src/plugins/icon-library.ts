import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faIndustry, faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
      faLinkedin
    );

    dom.watch();
  }
};
