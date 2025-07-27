
import Android from "../../assets/icons/Android.svg";
import Chrome from "../../assets/icons/Chrome.svg";
import IASD from "../../assets/icons/IASD.svg"

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
import anasheed from "../../assets/images/anasheed.png"
import lawdz from "../../assets/images/lawdz.png"
import book_recommendation_system from "../../assets/images/book_recommendation_system.png"
import monet_style_transfer from "../../assets/images/monet_style_transfer.png"
import TrackWise from '../../assets/images/TrackWise.png'
import ts_portfolio from '../../assets/images/ts_portfolio.png'
import sample_js_portfolio from '../../assets/images/sample_js_portfolio.png'

const data = [
  {
    id: 1,
    project_number: "Project 1",
    title: "Jewellery",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Nodejs', 'Reactjs', 'MySQL'],
    desc: "A management system for overseeing products, clients, transactions etc, enabling streamlined control over inventory and financial operations. ",
    img: jewellery,
  },
  {
    id: 2,
    project_number: "Project 2",
    title: "Elearn",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Reactjs', 'MySQL', 'Django'],
    desc: "A learning platform that offers students and professors a centralized space for accessing courses, sharing documents, communicating, and participating in quizzes. ",
    img: elearn,
  },
  {
    id: 3,
    project_number: "Project 3",
    title: "Attendy",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJs', 'MySQL', 'Firebase'],
    desc: "Learning platform that tracks student attendance via QR codes, manages classes, and provides a communication space for interactions.",
    img: attendy,
  },
  {
    id: 4,
    project_number: "Project 4",
    title: "Stoop",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Nodejs', 'MySQL'],
    desc: "A mobile app for inter-wilaya travel that allows normal clients and car owners to communicate and arrange transportation.",
    img: stoop,
  },
  {
    id: 5,
    project_number: "Project 5",
    title: "Portfolio",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['VueJs', 'Vue Motion'],
    desc: "This is my current portfolio, designed by @YankaDarelova",
    img: current_portfolio,
  },
  {
    id: 6,
    project_number: "Project 6",
    title: "Audio player app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter application where you can play/control audio. All audios are in local API.",
    img: audio_player_app,
  },
  {
    id: 7,
    project_number: "Project 7",
    title: "Snake game",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Simple Flutter snake game.",
    img: snake_game,
  },
  {
    id: 8,
    project_number: "Project 8",
    title: "Youtube",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['Javascript', 'Html', "Css"],
    desc: "A complete YouTube redesign with enhanced user interface while maintaining full functionality.",
    img: youtube,
  },
  {
    id: 9,
    project_number: "Project 9",
    title: "Travel app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Travel app contains 3 onboarding interfaces, home page to display places and another one for the details.",
    img: travel_app,
  },
  {
    id: 10,
    project_number: "Project 10",
    title: "Schedule app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Sqflite'],
    desc: "Application for organize your day by adding/control tasks.You can change the theme mode (dark / light).",
    img: timetable_app,
  },
  {
    id: 11,
    project_number: "Project 11",
    title: "Shoes store",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Sqflite'],
    desc: "It's your store where you display the shoes and details.",
    img: shoes_store,
  },
  {
    id: 12,
    project_number: "Project 12",
    title: "Portfolio",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'Firebase', 'ThreeJs'],
    desc: "This was my previous portfolio.",
    img: previous_portfolio,
  },
  {
    id: 13,
    project_number: "Project 13",
    title: "Registration pages",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Signin/Signup pages.",
    img: registration_pages,
  },
  {
    id: 14,
    project_number: "Project 14",
    title: "Payment app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter mobile application where you can pay your bills all at once, using API.",
    img: payment_app,
  },
  {
    id: 15,
    project_number: "Project 15",
    title: "Music app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter'],
    desc: "Flutter mobile application where you listen to your favorite music, using API.",
    img: music_app,
  },
  {
    id: 16,
    project_number: "Project 16",
    title: "Attendy",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'MySQL', 'Firebase'],
    desc: "Learning platform that tracks student attendance via QR codes, manages classes, and provides a communication space for interactions.",
    img: attendy,
  },
  {
    id: 17,
    project_number: "Project 17",
    title: "Meet app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Firebase'],
    desc: "Flutter mobile application for weekly meeting where you have should have account.",
    img: meet_app,
  },
  {
    id: 18,
    project_number: "Project 18",
    title: "Fitness app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Firebase'],
    desc: "Fitness mobile app registration contains welcome page, Signup/Signin page and forget password page.",
    img: fitness_app,
  },
  {
    id: 19,
    project_number: "Project 19",
    title: "Filmy site",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'Framer Motion'],
    desc: "Website to see movies/series using API",
    img: filmy_site,
  },
  {
    id: 20,
    project_number: "Project 20",
    title: "Invite dashboard",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'Framer Motion'],
    desc: "Responsive dashboard offers real-time data visualization and seamless user interaction.",
    img: dashboard,
  },
  {
    id: 21,
    project_number: "Project 21",
    title: "Chat app",
    technologies: [
      { title: "Mobile", icon: Android },
    ],
    used : ['Flutter', 'Firebase'],
    desc: "Chat application where you can signin with google, send message/image in your conversations and set settings",
    img: chat_app,
  },
  {
    id: 22,
    project_number: "Project 22",
    title: "Anasheed",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'NodejJs', 'MySQL'],
    desc: "Anashid Digital Platform offers seamless access to Islamic chants with advanced search, playlist creation, listening history, and user engagement, while providing admins full control over content, users, and platform analytics.",
    img: anasheed,
  },
  {
    id: 23,
    project_number: "Project 23",
    title: "Book Recommendation system",
    technologies: [
      { title: "AI & DS", icon: IASD },
    ],
    used : ['FP-Growth', 'Apriori', 'Eclat', 'Python', 'Kaggle', 'Streamlit'],
    desc: "Explored multiple association rule learning algorithms to build a book recommendation system then selecting FP-Growth for its efficiency and accuracy. The system generates personalized book suggestions by identifying frequent reading patterns.",
    img: book_recommendation_system,
  },
  {
    id: 24,
    project_number: "Project 24",
    title: "Monet style transfer",
    technologies: [
      { title: "AI & DS", icon: IASD },
    ],
    used : ['Python', 'CycleGAN', 'Kaggle', 'Streamlit'],
    desc: "Built a neural style transfer system to transform images into Monet-style paintings using CycleGAN trained on a Kaggle dataset. A Streamlit interface allows users to upload images and visualize real-time artistic transformations.",
    img: monet_style_transfer,
  },
  {
    id: 25,
    project_number: "Project 25",
    title: "Algerian LawDZ",
    technologies: [
      { title: "AI & DS", icon: IASD },
    ],
    used : ['PyMuPDF', 'OCR', 'Embedding model', 'FAISS', 'LLM', 'RAG', 'Kaggle', 'Streamlit'],
    desc: "AI-powered legal assistant that analyzes Algeria’s Journal Officiel (Official Gazette) by extracting legal texts to help users get accurate and context-aware answers to their legal inquiries.",
    img: lawdz,
  },
  {
    id: 26,
    project_number: "Project 26",
    title: "TrackWise",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB'],
    desc: "Full-stack expense tracking web application featuring secure backend operations and a dynamic user interface. Users can add, manage, and visualize their expenses over time.",
    img: TrackWise,
  },
  {
    id: 27,
    project_number: "Project 27",
    title: "TypeScript Portfolio",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['ReactJS', 'TypeScript', 'Framer Motion', 'TailwindCss', 'Vite'],
    desc: "An interactive and visually polished developer portfolio that showcases professional background, skills, projects and blogs through a smooth and modern user experience.",
    img: ts_portfolio,
  },
  {
    id: 28,
    project_number: "Project 28",
    title: "Sample JS Portfolio",
    technologies: [
      { title: "Website", icon: Chrome },
    ],
    used : ['JavaScript', 'CSS3', 'HTML5'],
    desc: "Sample Portfolio project with JS to show your projects.",
    img: sample_js_portfolio,
  },
];

export default data;
