
import Android from "../../assets/icons/Android.svg";
import Chrome from "../../assets/icons/Chrome.svg";
import audio_player_app from "../../assets/images/audioPlayer.jpg";
import snake_game from "../../assets/images/snakeGame.jpg";
import youtube from "../../assets/images/youtube.png";
import travel_app from "../../assets/images/travelApp.png";
import timetable_app from "../../assets/images/timetableApp.png";

const data = [
  {
    id: 1,
    title: "Project 1",
    theme: "Audio player app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter application where you can play, stop, repeat or release audio, fast or slow forward, auto stop when navigate. All audios are in local API.",
    img: audio_player_app,
  },
  {
    id: 2,
    title: "Project 2",
    theme: "Snake game",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Simple Flutter snake game.",
    img: snake_game,
  },
  {
    id: 3,
    title: "Project 3",
    theme: "Youtube",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Javascript', 'Html', "Css"],
    desc: "A complete YouTube redesign with enhanced user interface while maintaining full functionality.",
    img: youtube,
  },
  {
    id: 4,
    title: "Project 4",
    theme: "Travel app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Frontend of a travel app, with user-friendly interface and smooth navigation. It contains 3 onboarding interfaces, home page to display places and another one for the details of each place like the stars, price, little desc etc",
    img: travel_app,
  },
  {
    id: 5,
    title: "Project 5",
    theme: "Schedule app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Sqflite'],
    desc: "Application for organize your day where you can add tasks with some information for each one and display each day's tasks. Schedule is flutter application where you can: change theme mode (dark / light) - see the calender - add task - mark it as completed - delete task - you can add some information about the task like the title or description for more details, choose a date for your task, choose start time and end time, choose color for the background of the task when display it.",
    img: timetable_app,
  },
];

// const projects = [
//   {
//     name: 'smart home app',
//     image: smart_home_app,
//     description: 'single page of homesmart application where you can control Smart TV Smart Light Smart AC Smart Fan',
//     source_code_link: 'https://github.com/amaliahm/home.git',
//     tags: ['flutter']
//   },
//   {
//     name: 'shoes store',
//     image: shoes_store,
//     description: 'shoes store app design',
//     source_code_link: 'none',
//     tags: ['figma'],
//   },
//   {
//     name: 'registration pages',
//     image: registration_pages,
//     description: 'sign in/up pages desing',
//     source_code_link: 'none',
//     tags: ['figma']
//   },
//   {
//     name: 'portfolio',
//     image: portfolio,
//     source_code_link: 'https://github.com/amaliahm/portfolio.git',
//     description: 'i made this portfolio',
//     tags: ['reactJs', 'firebase']
//   },
//   {
//     name: 'payment app',
//     image: payment_app,
//     description: 'Flutter mobile application where you can pay your bills all at once, using API',
//     tags: ['flutter'],
//     source_code_link: 'https://github.com/amaliahm/payment_app.git',
//   },
//   {
//     name: 'music app design',
//     image: music_app_design,
//     description: 'music app design',
//     source_code_link: 'none',
//     tags: ['figma']
//   },
//   {
//     name: 'meet app design',
//     image: meet_app_design,
//     description: 'meet app desing',
//     source_code_link: 'none',
//     tags: ['figma']
//   },
//   {
//     name: 'fitness registration app',
//     image: fitness_registration_app,
//     description: 'Fitness Flutter mobile application registration UI: Welcome page - Sign up page - Sign in page -Forget password page',
//     tags: ['flutter'],
//     source_code_link: 'https://github.com/amaliahm/fitness_app.git'
//   },
//   {
//     name: 'filmy site',
//     image: filmy_site,
//     description: 'website for films and series',
//     source_code_link: 'none',
//     tags: ['figma']
//   },
//   {
//     name: 'dashboard',
//     image: dashboard,
//     description: 'dashboard design',
//     source_code_link: 'none',
//     tags: ['figma']
//   },
//   {
//     name: 'chat application',
//     image: chat_application,
//     description: 'chat application where you can -> sign in with google -> have a conversation with your friends ( you can send message, image ) -> set settings',
//     tags: ['flutter', 'firebase'],
//     source_code_link: 'https://github.com/amaliahm/chat_app.git'
//   },
//   {
//     name: 'chat app design',
//     image: chat_app_design,
//     description: 'ui design for chat application',
//     source_code_link: 'none',
//     tags: ['figma'],
//   },
//   {
//     name: 'buy and sell app design',
//     image: buy_and_sell_app_design,
//     description: 'buy and sell app design',
//     source_code_link: 'none',
//     tags: ['figma']
//   },
// ]

export default data;
