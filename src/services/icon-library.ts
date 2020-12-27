import { dom, library } from "@fortawesome/fontawesome-svg-core";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

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
