import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faIndustry, faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  // Solid
  faUser,
  faIndustry,
  faEnvelope,
  faMobile,

  // Brands
  faGithub
);

dom.watch();
