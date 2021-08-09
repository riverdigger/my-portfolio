import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGamepad, faPhotoVideo, faRocket } from '@fortawesome/free-solid-svg-icons';

export const projects = [
  {
    title: "Website Developer",
    subtitle: "WellFence",
    description: [
      "Create functionality and design of entire web app that is used by ops center and clients",
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
    image: "./dreadnought-3.gif",
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
      "Renewed the department’s website with a whole new design and functionality, while collaborating with faculty to receive feedback on user experience. Improved the quality of teaching that the faculty can provide at Colorado School of Mines by producing supplemental instructional videos and graphics. Collaborated with faculty to help them achieve a higher productivity and further their teaching courses.",
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
      "Constructed and tested hardware kits that will later be used as final products on the Orion Spacecraft and troubleshooted software problems by controlling cameras remotely through a Linux terminal. Used automation in Linux environments that created and ran bash scripts for command line interaction to run tests and collect results.",
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

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "GraphQL",
  "Material UI",
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
