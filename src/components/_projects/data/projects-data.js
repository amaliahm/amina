import CssIcon from "../../../assets/icons/DeviconCss3.svg";
import GolangIcon from "../../../assets/icons/SkillsIconsGolang.svg";
import HtmlIcon from "../../../assets/icons/DeviconHtml5.svg";
import NestIcon from "../../../assets/icons/SkillIconsNestjsDark.svg";
import NextJsIcon from "../../../assets/icons/LogosNextjsIcon.svg";
import NuxtIcon from "../../../assets/icons/SkillIconsNuxtjsDark.svg";
import PythonIcon from "../../../assets/icons/SkillIconsPythonDark.svg";
import ReactIcon from "../../../assets/icons/SkillIconsReactDark.svg";
import SvelteIcon from "../../../assets/icons/SkillsIconsSvelte.svg";
import VueIcon from "../../../assets/icons/SkillIconsVuejsDark.svg";

const data = [
  {
    id: 1000,
    title: "Project 1",
    theme: "_kanban-board",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "A general Kanban Ticketing System built with NextJS and Supabase.",
    link: "https://github.com/adan-ayaz-stan/kanban-ticketing-system",

    img: "https://res.cloudinary.com/ddfjwg2rb/image/upload/v1722365792/My%20Uploads/Portfolio%20Projects/Kanban%20Project/LandingPageImage.png",
  },
  {
    id: 2000,
    title: "Project 2",
    theme: "_conference-app",
    technologies: [
      { title: "Vue", icon: VueIcon },
      { title: "Nuxt", icon: NuxtIcon },
    ],
    desc: "A conference-app built on Nuxt, Supabase and tRPC.",
    link: "https://github.com/adan-ayaz-stan/conference-app-nuxt",
    img: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3000,
    title: "Project 3",
    theme: "_gamebuddies-matchmaker",
    technologies: [
      { title: "Golang", icon: GolangIcon },
      { title: "Svelte", icon: SvelteIcon },
    ],
    desc: "A conference-app built on Nuxt, Supabase and tRPC.",
    link: "https://github.com/adan-ayaz-stan/gamebuddies",
    img: "https://i.ibb.co/gzLn8GZ/image-5.png",
  },
  {
    id: 4000,
    title: "Project 4",
    theme: "_static-site-gen-v1",
    technologies: [
      { title: "Python", icon: PythonIcon },
      { title: "HTML", icon: HtmlIcon },
    ],
    desc: "A static site generator that recursively generates HTML from Markdown.",
    link: "https://github.com/adan-ayaz-stan/static-site-generator-v1",
    img: "https://res.cloudinary.com/ddfjwg2rb/image/upload/v1722366730/My%20Uploads/Portfolio%20Projects/Static%20Site%20Generator%20v1/ThumbnailImage.jpg",
  },
  {
    id: 5000,
    title: "Project 5",
    theme: "_chat-app",
    technologies: [
      { title: "Vue", icon: VueIcon },
      { title: "Nuxt", icon: NuxtIcon },
    ],
    desc: "A basic chat application built on Nuxt and Supabase.",
    link: "https://github.com/adan-ayaz-stan/nuxt-chat-application",
    img: "https://i.ibb.co/fDcYLCp/OIG.jpg",
  },
  {
    id: 6000,
    title: "Project 6",
    theme: "_online-store",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "A mimickery of a online store design using NextJS.",
    link: "https://github.com/adan-ayaz-stan/the-bottle-haus-project",
    img: "https://i.ibb.co/tbymZzK/index.png",
  },
  {
    id: 7000,
    title: "Project 7",
    theme: "_portfolio-site",
    technologies: [{ title: "Vue", icon: VueIcon }],
    desc: "My own portfolio site built on top of Vue as a SPA.",
    link: "/",
    img: "https://i.ibb.co/WcFc25V/index2.png",
  },
  {
    id: 8000,
    title: "Project 8",
    theme: "_agency-website",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "An agency website built with NextJS and Framer Motion.",
    link: "https://luceforge.vercel.app",
    icon: NextJsIcon,
    img: "https://i.ibb.co/NZ7skxR/image.png",
  },
  {
    id: 9000,
    title: "Project 9",
    theme: "_novel-pub",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "A full-stack light novel web app built atop of NextJS frontend + NextJS Web scraping",
    link: "https://spitfirenovelpub.vercel.app",
    img: "https://img.freepik.com/free-photo/colorful-ball-ribbons_71767-142.jpg?t=st=1687028246~exp=1687028846~hmac=95b0d7a5a5bc29ce5c447dfb77fea6cacd6f7ddf4fc532fa2d3a256aeba38b97",
  },
  {
    id: 10000,
    title: "Project 10",
    theme: "_drove-drive",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "An agency showcase site with transitions built with NextJS and Framer Motion.",
    link: "https://drove-animated-site.vercel.app/",
    img: "https://i.ibb.co/VmTft8Z/scrnli-7-25-2024-1-28-01-PM.png",
  },
];

export default data;
