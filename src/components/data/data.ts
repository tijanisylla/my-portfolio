//
import { TypeMyData, TypeNavbar, TypeExperience } from "./Models";
import Img1 from "../assets/testimonial2.png";

export const data: TypeMyData[] = [
  // {
  //   title: "Spades-Station",
  //   img_url: ``,
  //   link: "https://sylla-spadesshopper.herokuapp.com/",
  //   description:
  //     "● E-commerce website for classic games" +
  //     "," +
  //     "registered customers can add/edit items to their cart and checkout their orders with confirmation" +
  //     " Built with  React, Express, Axios, Postgres, JSON Web Token, and BCrypt",
  // },

  {
    id: 1,
    title: "Calculator",
    img_url: `${Img1}`,
    link: "https://calculator-sylla.netlify.app",
    description: " Calculator built with Jquery CSS.",
  },
  {
    id: 2,
    title: "Snake",
    img_url: `${Img1}`,
    link: "https://snake-sylla.netlify.app",
    description: " Snake built with HTML CSS and Javascript ! Hope you enjoy !",
  },
  {
    id: 3,
    title: "Retro-draw",
    img_url: `${Img1}`,
    link: "https://retro-draw-sylla.netlify.app",
    description: "Drawing board, built with Jquery CSS ",
  },
  // {
  //   title: "Stranger-Things",
  //   img_url: `${Img1}`,
  //   link: "https://stranger-things1.netlify.app",
  //   description:
  //     "● A log-in website, Built with Reactjs, Each user have his own Authentication or Token",
  // },
  // {
  //   title: "UserHub",
  //   img_url: `${Img1}`,
  //   link: "https://userhub-js.netlify.app",
  //   description: "●  A navigating site built with Jquery CSS",
  // },
  // {
  //   title: "Art-collector",
  //   img_url: ``,
  //   link: "https://art-collector.netlify.app",
  //   description:
  //     "● A navigating site to serch for a specific post and more...built with Jquery HTML CSS",
  // },
  // {
  //   title: "Shopping",
  //   img_url: ``,
  //   link: "",
  //   description:
  //     "● A changed color clothes site, to select wich color the user like  ",
  // },
  // {
  //   title: "Animation",
  //   img_url: ``,
  //   link: "https://animation-js-sylla.netlify.app",
  //   description: "● A cool animation site, built HTML CSS vanilla JS ",
  // },

  // {
  //   title: "Fitness",
  //   img_url: ``,
  //   link: "https://fitnesstrackerr.netlify.app",
  //   description:
  //     "● Community site for creating and sharing exercise routines  ",
  // },
  // {
  //   title: "Cart",
  //   img_url: ``,
  //   link: "https://carte-storage.netlify.app",
  //   description:
  //     "● It's a shopping carte web app, built with Reactjs, each item added to carte is stored in the localstorage in case the user come back at any other time and the carte is still stored ",
  // },
  // {
  //   title: "Form-Validation",
  //   img_url: ``,
  //   link: "https://form-validation-sylla.netlify.app",
  //   description: "●  A validation form HTML CSS",
  // },
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
    item: "Skils",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Services",
    icon: "uil uil-briefcase",
    href: "services",
  },

  {
    id: 5,
    item: "Projects",
    icon: "uil uil-laptop",
    href: "projects",
  },

  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];

export const myExperience: TypeExperience[] = [
  {
    title: "FoodMix  Marketing — Software Engineee",
    date: "January 2022 - March 2022",
    content:
      "WordPress, MJML to create and update emails our clients used to send to customers. Used “Email acid” to validate mobile responsiveness of the emails sent on a variety of popular web browsers (Chrome, Firefox, IE,etc).  ",
  },
  {
    title: "Fullstack Academy — Apprentice",
    date: "April 2021 - July 2021",
    content:
      "Planned, designed and implemented multitude of full stack applications  leveraging :  Javascript, NodeJs, PostgreSQL, React, Jquery, Bootstrap.",
  },
  {
    title: "Hammacher Schlemmer - Customer Service ",
    date: "November 2021 - Dec 202",
    content:
      " Responsible for interfacing directly with customers to address their concerns, answer questions and assist with their orders overall.",
  },
];
