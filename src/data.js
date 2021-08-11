import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGamepad, faPhotoVideo, faRocket } from '@fortawesome/free-solid-svg-icons';

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
