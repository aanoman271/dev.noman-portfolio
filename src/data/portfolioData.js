import { FaReact, FaFigma, FaDocker, FaGithub, FaLinkedin, FaFacebook, FaPalette, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";

import { FiCpu } from "react-icons/fi";
import { BiSolidZap, BiLogoTypescript } from "react-icons/bi";

export const portfolioData = {
  hero: {
    headline: "Abdullah   Al Noman",
    subheadline: "Where precision code meets cinematic design. Specializing in highly interactive, performance-driven web architectures.",
    availability: "Available for work",
  },
  profile: {
    name: "Abdullah Al Noman",
    role: "Frontend Focus Full Stack Developer",
    email: "aanoman291@gmail.com",
    phone: "+880 1329 1271 89",
    whatsapp: "+880 1748 1356 75",
    location: "Dhaka,Bangladesh",
    experience: "8 month of learning exprince",
    resumeLink: "https://drive.google.com/file/d/1xRJPlWDdCDyhXrXR2edlY-rz7P9CN24D/view?usp=sharing",
    socials: [
      {
        name: "github",
        link: "https://github.com/aanoman271",
        icon: FaGithub,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/abdullahalnoman291/",
        icon: FaLinkedin,
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/abdullahnoman2307/",
        icon: FaFacebook,
      },
    ],
  },
  about: {
    title: "The Blueprint.",
    description: "Over the past 8 months, I have been actively learning web development. I am still improving my skills and gaining more experience, especially in deployment and building real-world projects. My journey began with understanding core programming logic, and over time I gradually moved toward building modern web applications.                I am currently focused on strengthening both my frontend and backend fundamentals.              In the next two years, my goal is to grow into a confident full-stack developer, capable of building scalable and production-ready applications through continuous learning and practice.",
    stats: [
      { label: "Completed Projects", value: "5+" },
      { label: "learning Experience", value: "8 month +" },
    ],
    beyondCode: [
      { icon: FiCpu, text: "Prioritizing tonal architecture and clean, modular logic over standard patterns." },
      { icon: FaPalette, text: "Obsessed with the 'No-Line' rule—using depth and surface hierarchy to guide users." },
      { icon: BiSolidZap, text: "Moving from MERN fundamentals to production-ready, scalable system architecture." },
    ],
  },
  skills: {
    frontend: [
      { name: "React", level: 95, icon: FaReact },
      { name: "Next.js", level: 90, icon: RiNextjsFill },
      { name: "Tailwind CSS", level: 98, icon: RiTailwindCssFill },
      { name: "TypeScript", level: 92, icon: BiLogoTypescript },
      { name: "Framer Motion", level: 85, icon: TbBrandFramerMotion },
    ],
    backend: [
      { name: "Node.js", level: 80, icon: FaNodeJs },
      { name: "MongoDb", level: 75, icon: SiMongodb },
      { name: "Express", level: 70, icon: SiExpress },
    ],
    tools: [
      { name: "Docker", level: 65, icon: FaDocker },
      { name: "Git", level: 95, icon: FaGithub },
      { name: "Figma", level: 85, icon: FaFigma },
    ],
  },
  timeline: [
    {
      type: "experience",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading the frontend architecture for high-traffic SaaS applications.",
    },
    {
      type: "education",
      title: "B.Sc in Computer Science",
      institution: "Tech University",
      period: "2018 - 2022",
      description: "Focused on Software Engineering and Human-Computer Interaction.",
      level: 2, // 2 for Bachelors, higher than HSC
    },
    {
      type: "education",
      title: "Higher Secondary Certificate",
      institution: "City College",
      period: "2016 - 2018",
      description: "Science focus.",
      level: 1, // HSC
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "CodeAreana (Team project-as a frontend role)",
      shortDesc: "CodeArena – AI-Powered Competitive Coding & Interview Preparation Platform.",
      techStack: ["React ", "Nextjs", "Tailwind CSS", "docker", "shocket.io", "Framer Motion", "nodejs", "express", "mongoDb"],
      description: "AI-Powered Competitive Coding, Automated Evaluation, and Interview Preparation Platform .This project is a full-stack web-based platform where users can practice programming, participate in coding contests, receive automated evaluations, and prepare for technical interviews with the help of AI-powered feedback and analysis.",
      links: {
        live: "https://code-arena-team-project.vercel.app/",
        repo: "https://github.com/rabiulislam5334/CodeArena-TeamProject",
      },
      challenges: "Worked on team-based and large-scale projects where I faced challenges adapting to team workflows and understanding complex codebases.Collaborating with others and maintaining clean communication improved my teamwork skills.Analyzing large applications helped me strengthen my problem-solving and debugging abilities.These experiences made me more confident in handling real-world development environments.",
      futurePlans: "Our future plan is to enhance the project with scalable features, improve code quality, and make the application more user-friendly and efficient.",
    },
    {
      id: "proj-2",
      title: "E-Commerce OS",
      shortDesc: "Operating system level experience for modern e-commerce brands.",
      techStack: ["Next.js", "Shopify API", "Three.js"],
      description: "Redefining how users interact with online stores using 3D product previews and ultra-fast navigation.",
      links: {
        live: "#",
        repo: "#",
      },
      challenges: "Optimizing 3D models for mobile devices.",
      futurePlans: "Augmented Reality (AR) try-on features.",
    },
    {
      id: "proj-3",
      title: "TaskFlow Pro",
      shortDesc: "Minimalist task management for high-performance teams.",
      techStack: ["React", "Zustand", "DnD Kit"],
      description: "A productivity tool that stays out of your way. Focused on keyboard shortcuts and intuitive drag-and-drop logic.",
      links: {
        live: "#",
        repo: "#",
      },
      challenges: "Maintaining a clean UI while supporting complex task dependencies.",
      futurePlans: "AI-powered task prioritization.",
    },
  ],
}
