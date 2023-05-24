// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import BlogIcon from "./images/BlogIcon.png";
import XSSJPG from "./images/XSS-JPG.png";
import CyberSecurityDontGetHacked from "./images/dark_with_white_background.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "trustinveritas";

// Blog link icon - https://icon-sets.iconify.design/
// export const Blog = <Icon icon="ph:link-bold" />;
export const Blog = <img src={BlogIcon} alt="Blog Logo" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="file-icons:yara" className="display-4" />,
    name: "YARA",
  },
  {
    id: 5,
    skill: <Icon icon="teenyicons:python-solid" className="display-4" />,
    name: "Python",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:bash" width="80" height="80" className="display-4" />,
    name: "Bash",
  },
  {
    id: 7,
    skill: <Icon icon="file-icons:nmap" width="70" height="70" className="display-4" />,
    name: "nmap",
  },
  {
    id: 8,
    skill: <Icon icon="mdi:powershell" className="display-4" />,
    name: "PowerShell",
  },
  {
    id: 9,
    skill: <Icon icon="simple-icons:wireshark" className="display-4" />,
    name: "Wireshark",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["pentest-project-site", "XSS-IN-JPG"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "XSS-IN-JPG",
    image: XSSJPG,
  },
  {
    name: "pentest-project-site",
    image: CyberSecurityDontGetHacked,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
