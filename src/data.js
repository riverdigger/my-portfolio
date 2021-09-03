import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGamepad, faPhotoVideo, faRocket, faSearch, faExternalLinkAlt, faMusic } from '@fortawesome/free-solid-svg-icons';

export const experience = [
  {
    title: "Ruby Developer",
    subtitle: "WellFence",
    description: [
      "Created functionality and design of entire web app that is used by ops center and clients",
      "Track user information and activity for well locations across the Permian Basin",
      "Increased automation and improved UI/UX",
      "Utilized AWS Buckets, REST APIs, Twilio, and AJAX Charts",
    ],
    image: "./wellfence-1.gif",
    link: "https://wellfence.com",
    tags: [
      "Ruby",
      "PostgreSQL",
      "FullStack",
    ],
    icon: faCode,
  },
  {
    title: "QA Tester",
    subtitle: "Six Foot Games",
    description: [
      "Troubleshooted and tracked bugs for PS4/PC versions of the video game Dreadnought",
      "Implemented pushing/pulling patches and builds to multiple machines",
      "Successfully assisted the team in releasing the product to Steam and Playstation Store",
    ],
    image: "./dreadnought-1.gif",
    link: "https://store.steampowered.com/app/835860/Dreadnought/",
    tags: [
      "Python",
      "Jira",
      "Confluence",
    ],
    icon: faGamepad,
  },
  {
    title: "Media Developer",
    subtitle: "Trefny Center",
    description: [
      "Renewed the department’s website with a whole new UI/UX with user feedback",
      "Improved the quality of teaching at Colorado School of Mines through supplemental instructional videos and graphics",
    ],
    image: "./trefnycenter-1.gif",
    link: "https://trefnycenter.mines.edu/",
    tags: [
      "HTML 5",
      "JavaScript",
      "Premiere Pro",
    ],
    icon: faPhotoVideo,
  },
  {
    title: "Software Intern",
    subtitle: "Deep Space Systems",
    description: [
      "Constructed and tested hardware kits to be used on the Orion Spacecraft",
      "Used automation in Linux environments to create and run bash scripts for command line interaction to run tests and collect camera data.",
    ],
    image: "./deepspacesystems-1.gif",
    link: "https://www.deepspacesystems.com/",
    tags: [
      "Bash Script",
      "Linux OS",
      "Automation",
    ],
    icon: faRocket,
  },
];

export const projects = [
  {
    title: "NFT Website",
    description: "Created a ReactJS website to host all of the artwork for an NFT I made using my pixel art assets. These collectable villagers now have a place to live!",
    link: "https://www.windfallvillage.com/",
    links: [
      {link: "https://www.windfallvillage.com/", icon: faExternalLinkAlt},
    ],
    tags: [
      "ReactJS",
      "NFT",
    ],
    icon: faSearch,
    image: "./lineup.png",
  },
  {
    title: "Order PDF Analyzer",
    description: "Drilling Tools Intl online shopping API add-on to make it easier for part order creation. This app accepts a Schlumberger order PDF and parses the file to show resulting part list and similar items for a DTI shopping cart.",
    link: "https://compass-uploader.herokuapp.com/",
    links: [
      {link: "https://compass-uploader.herokuapp.com/", icon: faExternalLinkAlt},
    ],
    tags: [
      "OCR",
      "Ruby",
    ],
    icon: faSearch,
    image: "./compass_project.png",
  },
  {
    title: "Top-Down Pixel RPG",
    description: "Role playing game written in the Godot engine with over 1,249,500 different possible character combinations. Utilizes UI/UX pixel art as well as Zelda-like game mechanics. Still in development!",
    link: "https://github.com/riverdigger/WindFall",
    links: [
      {link: "https://github.com/riverdigger/WindFall", icon: faGithub},
    ],
    tags: [
      "Godot",
      "Pixel Art",
    ],
    icon: faSearch,
    image: "./run_left.gif",
  },
  {
    title: "Drawing Mobile App",
    description: "Mobile app with mobile drawing in mind, while still keeping things simple. Coded in Android Studio, Pixelli is an app that allows for local saving to your device, as well as Pixelli’s own gallery in app.",
    link: "https://www.youtube.com/watch?v=mKBNUeW3T1Q",
    links: [
      {link: "https://www.youtube.com/watch?v=mKBNUeW3T1Q", icon: faExternalLinkAlt},
    ],
    tags: [
      "Android Studio",
    ],
    icon: faSearch,
    image: "./pixelli.png",
  },
  {
    title: "Blinn-Phong Research",
    description: "Research paper about a depth based cel shader program written in OpenGL. The program optimizes render performance by lowering the polygon count of objects further away from the camera.",
    link: "./graphics_project_proposal.pdf",
    links: [
      {link: "./graphics_project_proposal.pdf", icon: faExternalLinkAlt},
    ],
    tags: [
      "OpenGL",
      "Blinn-Phong",
    ],
    icon: faSearch,
    image: "./cel_shaded.png",
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/riverdigger",
    color: "text-black",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/niallminer/",
    color: "text-blue-400",
    icon: faLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/niallmino/",
    color: "text-red-400",
    icon: faInstagram,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/4vtCqwB29gswN0fEKFRdCA?si=EXm50OzNQFus1d7Dd4pznA&dl_branch=1",
    color: "text-green-400",
    icon: faSpotify,
  },
];
