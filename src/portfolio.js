/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "George Ward",
  title: "Hi all, I'm George",
  subTitle: emoji(
    "A results-driven Full Stack Software Engineer 🚀 with 4+ years of experience building scalable Web, Desktop, and Cloud applications. Skilled in JavaScript, TypeScript, Python, C#, Angular, React, and cloud platforms like Azure. Passionate about performance optimization, clean architecture, and mentoring engineering teams."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13cb8WSpANQsEH31o3ae_13cEHMOAcClp/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gcward18",
  linkedin: "https://www.linkedin.com/in/georgecward/",
  gmail: "gcward8148@gmail.com",
  facebook: "https://www.facebook.com/george.ward.925",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER AND SCRUM LEADER BUILDING SCALABLE, HIGH-PERFORMANCE SYSTEMS",
  skills: [
    emoji("⚡ Architect and develop enterprise-grade frontends using Angular and React"),
    emoji("⚡ Build and optimize scalable .NET backends and RESTful APIs"),
    emoji("⚡ Drive Agile teams and CI/CD workflows using Azure DevOps and containerized pipelines"),
    emoji("⚡ Integrate cloud services and manage deployments across Azure, AWS, and Docker environments"),
    emoji("⚡ Optimize web performance through deep profiling, modular architecture, and state management")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "C# (.NET)",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL / MSSQL / MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "REST API Design",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Azure DevOps / Pipelines",
      fontAwesomeClassname: "devicon-azure-plain"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Material UI",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS / SCSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Jira / Agile",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "Performance Optimization",
      fontAwesomeClassname: "fas fa-tachometer-alt"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Missouri University of Science and Technology",
      logo: require("./assets/images/historic_emblem_optimized.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2017 - December 2019",
      desc: "Grader in Data Structures and Algorithms, Interned 3 times at different companies, and Co-oped at Inutitive Surgical.",
      descBullets: [
        "3.7 GPA",
        "Deans List for all semesters"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Angular (v10–v17)",
      progressPercentage: "95%"
    },
    {
      Stack: "TypeScript",
      progressPercentage: "90%"
    },
    {
      Stack: "C# (.NET)",
      progressPercentage: "90%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker",
      progressPercentage: "80%"
    },
    {
      Stack: "REST API Design",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Scrum Master / Full-Stack Team Lead / Developer",
      company: "iPerformX",
      companylogo: require("./assets/images/iperformx_logo.jpeg"),
      date: "June 2020 – January 2025",
      desc: "Founding developer at iPerformX, a startup focused on building a web-based platform for military pilot training.",
      descBullets: [
        "Improved REST API throughput by 300% and reduced average page load times by 60% across mission-critical flows by redesigning service layers and optimizing SQL access patterns.",
        "Cut deployment-related developer downtime by 85% by spearheading a git branching strategy overhaul and implementing automated CI/CD validation in Azure DevOps.",
        "Reduced platform bug reports by 35% by collaborating with stakeholders to refactor legacy onboarding workflows and standardize cross-team development practices.",
      ]
    },
    {
      role: "Field Service Support Software Developer",
      company: "Intuitive Surgical",
      companylogo: require("./assets/images/intuitive_surgical.jpeg"),
      date: "January 2020 - September 2020",
      desc: "Co-op at Intuitive Surgical, a leading robotic surgical company.",
      descBullets: [
        "Reduced diagnostic time for field engineers by 40% by delivering a Python/PyQt5 GUI tool to monitor distributed Windows services and system health in real-time.",
        "Increased delivery speed by 30% by automating packaging and deployment of desktop applications using PyInstaller and internal build tools.",
        "Enabled scalable content display and localization by creating dynamic HTML templates rendered via Jinja2 within embedded browser views.",      ],
    },
    {
      role: "Software Engineer Intern",
      company: "AT&T",
      companylogo: require("./assets/images/att.png"),
      date: "May 2019 – August 2019",
      desc: "Interned at AT&T, a leading telecommunications company.",
      descBullets: [
        "Improved field deployment workflows by 25% through development of a Unity-based AR mobile app that visualized real-time cellular signal strength using Firebase data.",
        "Accelerated internal tool delivery by 3x by building a React.js frontend integrated with Java REST APIs for rapid deployment of internal dashboards.",
        "Reduced onboarding friction across teams by producing detailed documentation and reusable API modules adopted by two peer teams during the internship.",
      ],

    },
    {
      role: "Software Engineer Intern",
      company: "Device Solutions",
      companylogo: require("./assets/images/device_solutions.png"),
      date: "May 2018 – August 2018",
      desc: "Interned at Device Solutions, an IoT engineering consulting company.",
      descBullets: [
        "Reduced manual data analysis time by 80% by creating Python scripts to parse and summarize packet data captured from Wireshark sessions.",
        "Cut support system bug reports by 50% after launching a MySQL-backed billing and support tracking system used by internal service teams.",
        "Improved developer onboarding time by 40% by creating a custom Python library for streamlined database interactions and metric tracking.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "WW Wood Product",
      companylogo: require("./assets/images/ww_wood_products.jpg"),
      date: "May 2017 – August 2017",
      desc: "Interned at WW Wood Products, a leading cabinet manufacturing company from SE Missouri.",
      descBullets: [
        "Saved 5–20 labor hours per week by building automated test scripts that replaced manual QA checks for key internal applications.",
        "Reduced factory floor errors by 70% with a web app built in C# that helped staff quickly identify compatible cabinet components by size and color.",
        "Delivered factory-ready tools 2 weeks ahead of schedule by working closely with manufacturing stakeholders to iterate on design and usability.",
      ],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects that I've worked on",
  projects: [
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/iperformx_logo.jpeg"),
    //   projectName: "Application-Wide Performance Optimization Initiative",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   // footerLink: [
    //   //   {
    //   //     name: "Visit Website",
    //   //     url: "http://saayahealth.com/"
    //   //   }
    //   //   //  you can add extra buttons here.
    //   // ]
    // },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 573 712 6440",
  email_address: "gcward8148@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
