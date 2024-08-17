
import Android from "../../assets/icons/Android.svg";
import Chrome from "../../assets/icons/Chrome.svg";
import audio_player_app from "../../assets/images/audioPlayer.jpg";
import snake_game from "../../assets/images/snakeGame.jpg";
import youtube from "../../assets/images/youtube.png";
import travel_app from "../../assets/images/travelApp.png";
import timetable_app from "../../assets/images/timetableApp.png";
import shoes_store from "../../assets/images/shoesStore.png";
import previous_portfolio from "../../assets/images/previousPortfolio.png";
import registration_pages from "../../assets/images/registrationPages.png";
import payment_app from "../../assets/images/paymentApp.png";
import music_app from "../../assets/images/musicApp.png";
import meet_app from "../../assets/images/meetApp.png";
import filmy_site from "../../assets/images/filmySite.png";
import dashboard from "../../assets/images/dashboard.png";
import chat_app from "../../assets/images/chatApp.png";
import fitness_app from "../../assets/images/fitnessApp.jpg";
import current_portfolio from "../../assets/images/currentPortfolio.png";
import jewellery from "../../assets/images/jewellery.png";
import elearn from "../../assets/images/elearn.png";
import attendy from "../../assets/images/attendy.png";
import stoop from "../../assets/images/stoop.png";

const data = [
  {
    id: 1,
    title: "Project 1",
    theme: "Jewellery",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Nodejs', 'Reactjs', 'Mysql'],
    desc: "A management system for overseeing products, clients, transactions etc, enabling streamlined control over inventory and financial operations. ",
    img: jewellery,
  },
  {
    id: 2,
    title: "Project 2",
    theme: "Elearn",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Reactjs', 'Mysql', 'Django'],
    desc: "A learning platform that offers students and professors a centralized space for accessing courses, sharing documents, communicating, and participating in quizzes. ",
    img: elearn,
  },
  {
    id: 3,
    title: "Project 3",
    theme: "Attendy",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJs', 'Mysql', 'Firebase'],
    desc: "Learning platform that tracks student attendance via QR codes, manages classes, and provides a communication space for interactions.",
    img: attendy,
  },
  {
    id: 4,
    title: "Project 4",
    theme: "Stoop",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Nodejs', 'Mysql'],
    desc: "A mobile app for inter-wilaya travel that allows normal clients and car owners to communicate and arrange transportation.",
    img: stoop,
  },
  {
    id: 5,
    title: "Project 5",
    theme: "Portfolio",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['VueJs', 'Vue Motion'],
    desc: "This is my current portfolio, designed by @YankaDarelova",
    img: current_portfolio,
  },
  {
    id: 6,
    title: "Project 6",
    theme: "Audio player app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter application where you can play/control audio. All audios are in local API.",
    img: audio_player_app,
  },
  {
    id: 7,
    title: "Project 7",
    theme: "Snake game",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Simple Flutter snake game.",
    img: snake_game,
  },
  {
    id: 8,
    title: "Project 8",
    theme: "Youtube",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Javascript', 'Html', "Css"],
    desc: "A complete YouTube redesign with enhanced user interface while maintaining full functionality.",
    img: youtube,
  },
  {
    id: 9,
    title: "Project 9",
    theme: "Travel app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Travel app contains 3 onboarding interfaces, home page to display places and another one for the details.",
    img: travel_app,
  },
  {
    id: 10,
    title: "Project 10",
    theme: "Schedule app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Sqflite'],
    desc: "Application for organize your day by adding/control tasks.You can change the theme mode (dark / light).",
    img: timetable_app,
  },
  {
    id: 11,
    title: "Project 11",
    theme: "Shoes store",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Sqflite'],
    desc: "It's your store where you display the shoes and details.",
    img: shoes_store,
  },
  {
    id: 12,
    title: "Project 12",
    theme: "Portfolio",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'Firebase', 'ThreeJs'],
    desc: "This was my previous portfolio.",
    img: previous_portfolio,
  },
  {
    id: 13,
    title: "Project 13",
    theme: "Registration pages",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Signin/Signup pages.",
    img: registration_pages,
  },
  {
    id: 14,
    title: "Project 14",
    theme: "Payment app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter mobile application where you can pay your bills all at once, using API.",
    img: payment_app,
  },
  {
    id: 15,
    title: "Project 15",
    theme: "Music app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter mobile application where you listen to your favorite music, using API.",
    img: music_app,
  },
  {
    id: 16,
    title: "Project 16",
    theme: "Attendy",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Mysql', 'Firebase'],
    desc: "Learning platform that tracks student attendance via QR codes, manages classes, and provides a communication space for interactions..",
    img: attendy,
  },
  {
    id: 17,
    title: "Project 17",
    theme: "Meet app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Firebase'],
    desc: "Flutter mobile application for weekly meeting where you have should have account.",
    img: meet_app,
  },
  {
    id: 18,
    title: "Project 18",
    theme: "Fitness app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Firebase'],
    desc: "Fitness mobile app registration contains welcome page, Signup/Signin page and forget password page.",
    img: fitness_app,
  },
  {
    id: 19,
    title: "Project 19",
    theme: "Filmy site",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'Framer Motion'],
    desc: "Website to see movies/series using API",
    img: filmy_site,
  },
  {
    id: 20,
    title: "Project 20",
    theme: "Invite dashboard",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'Framer Motion'],
    desc: "Responsive dashboard offers real-time data visualization and seamless user interaction.",
    img: dashboard,
  },
  {
    id: 21,
    title: "Project 21",
    theme: "Chat app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Firebase'],
    desc: "Chat application where you can signin with google, send message/image in your conversations and set settings",
    img: chat_app,
  },
];

export default data;
