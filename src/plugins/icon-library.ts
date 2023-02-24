import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
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

interface IconMap {
  [key: string]: {
    name: string;
    icon?: string;
    color?: string;
    img?: HTMLImageElement;
  };
}

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: (app: any) => {
    library.add(
      // Solid
      faUser,
      faIndustry,
      faEnvelope,
      faMobile,
      faExpandArrowsAlt,
      faGlobe,
      faCode,
      faChevronLeft,
      faChevronRight,

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

    app.config.globalProperties.$iconMap = {
      js: {
        name: "JavaScript",
        icon: "fab fa-js",
        color: "#f0db4f"
      },
      ts: {
        name: "TypeScript",
        img: require("@/assets/img/logos/ts.png")
      },
      html: {
        name: "HTML5",
        icon: "fab fa-html5",
        color: "#e34c26"
      },
      css: {
        name: "CSS3",
        icon: "fab fa-css3",
        color: "#264de4"
      },
      sass: {
        name: "SASS",
        icon: "fab fa-sass",
        color: "#cd6799"
      },
      python: {
        name: "Python",
        img: require("@/assets/img/logos/python.png")
      },
      java: {
        name: "Java",
        img: require("@/assets/img/logos/java.png")
      },
      php: {
        name: "PHP",
        icon: "fab fa-php",
        color: "#8993be"
      },
      sql: {
        name: "SQL",
        img: require("@/assets/img/logos/sql.png")
      },
      angular: {
        name: "Angular",
        icon: "fab fa-angular",
        color: "#dd1b16"
      },
      vue: {
        name: "Vue",
        img: require("@/assets/img/logos/vue.png")
      },
      rxjs: {
        name: "RxJS",
        img: require("@/assets/img/logos/rxjs.png")
      },
      am: {
        name: "Angular Material",
        img: require("@/assets/img/logos/angular-material.png")
      },
      vuetify: {
        name: "Vuetify",
        img: require("@/assets/img/logos/vuetify.png")
      },
      bulma: {
        name: "Bulma",
        img: require("@/assets/img/logos/bulma.png")
      },
      bootstrap: {
        name: "Bootstrap",
        icon: "fab fa-bootstrap",
        color: "#563d7c"
      },
      leaflet: {
        name: "Leaflet",
        img: require("@/assets/img/logos/leaflet.png")
      },
      node: {
        name: "Node.js",
        icon: "fab fa-node",
        color: "#68a063"
      },
      figma: {
        name: "Figma",
        img: require("@/assets/img/logos/figma.png")
      },
      git: {
        name: "Git",
        icon: "fab fa-git-alt",
        color: "#f34f29"
      },
      svn: {
        name: "SVN",
        img: require("@/assets/img/logos/svn.png")
      },
      firebase: {
        name: "Google Firebase",
        img: require("@/assets/img/logos/firebase.png")
      },
      wordpress: {
        name: "WordPress",
        icon: "fab fa-wordpress",
        color: "#00749c"
      },
      prestashop: {
        name: "PrestaShop",
        img: require("@/assets/img/logos/prestashop.png")
      },
      pwa: {
        name: "Progressive Web App",
        img: require("@/assets/img/logos/pwa.png")
      }
    } as IconMap;
  }
};
