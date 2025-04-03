// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import calculator from "../assets/calculator.png";
import Snake from "../assets/Snake1.png";
import Retro from "../assets/Draw.png";
import Stranger from "../assets/Strange.png";
import UserHub from "../assets/Userhub.png";
import ArtCollector from "../assets/art.png";
import Animation from "../assets/animation.png";
import Fitness from "../assets/Fitness.png";
import Task from "../assets/Task.png";
import AI from "../assets/openai-featured.jpg";
import Movie from "../assets/movie.png";
import calculator2 from "../assets/calculator2.png";
import RFID from "../assets/rfid.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Chat GPT-3 AI",
    img_url: `${AI}`,
    link: "https://chat-gpt-clone-gilt.vercel.app/",
    gitHub: "https://github.com/tijanisylla/chat-gpt",
  },
  {
    id: 2,
    title: "Calculator phone app",
    img_url: `${calculator2}`,
    link: "https://github.com/tijanisylla/sylla-calculator",
    gitHub: "https://github.com/tijanisylla/sylla-calculator",
  },

  {
    id: 3,
    title: "Movie App",
    img_url: `${Movie}`,
    link: "https://tijanisylla.github.io/movie-app",
    gitHub: "https://github.com/tijanisylla/movie-app",
  },

  {
    id: 4,
    title: "Calculator",
    img_url: `${calculator}`,
    link: "https://calculator-sylla.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 5,
    title: "Snake",
    img_url: `${Snake}`,
    link: "https://snake-sylla.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 6,
    title: "Retro-draw",
    img_url: `${Retro}`,
    link: "https://retro-draw-sylla.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 7,
    title: "Stranger-Things",
    img_url: `${Stranger}`,
    link: "https://stranger-things1.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 8,
    title: "UserHub",
    img_url: `${UserHub}`,
    link: "https://userhub-js.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },

  {
    id: 9,
    title: "Art-collector",
    img_url: `${ArtCollector}`,
    link: "https://art-collector.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 10,
    title: "Animation",
    img_url: `${Animation}`,
    link: "https://animation-js-sylla.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },

  {
    id: 11,
    title: "Fitness",
    img_url: `${Fitness}`,
    link: "https://fitnesstrackerr.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 12,
    title: "Tasks Progress",
    img_url: `${Task}`,
    link: "https://main.d18m2yn7ohwgrq.amplifyapp.com/",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 13,
    title: "RFID",
    img_url: `${RFID}`,
    link: "https://www.plusrfid.com/",
    gitHub: "https://github.com/tijanisylla",
  },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
