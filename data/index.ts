export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Engineering scalable web solutions with Angular and .NET to drive real-world impact.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Flight Reservation Management System",
    des: "An application that allows users to search, select, and reserve flights between countries, with administrative management for flights, reservations, and accounts.",
    img: "/flightManagementSystem.webp",
    iconLists: ["/java.png", "/Oracle.png", "/JavaFX.png", "/CSS.svg"],
    link: "https://github.com/jihed5504/FlightManagementSystem/tree/main",
  },
  {
    id: 2,
    title: "Student Attendance Management System",
    des: "A comprehensive application for managing student attendance, featuring roles for administrators, professors, and students with 2FA and email notifications.",
    img: "/AttendanceManagementSystem.jpg",
    iconLists: [
      "/springboot.png",
      "/angular.png",
      "/jwt.png",
      "/2fa.png",
      "/smtp.png",
    ],
    link: "https://github.com/jihed5504/AttendanceManagementSystem",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Jihed was an outstanding experience. He developed a high-performance e-commerce platform that exceeded our expectations. His attention to detail, quick turnaround, and seamless integration of payment and product management systems were exceptional. I highly recommend him for any web development needs.",
    name: "Ayoub Ghmir",
    title: "Owner of Ghmir E-commerce",
    image: "/ayoub.jpg",
  },
  {
    quote:
      "Jihed created an exceptional musical event management system for our club, allowing us to organize, schedule, and promote events with ease. His ability to understand our needs and deliver a user-friendly and reliable solution was impressive. The system has streamlined our operations and made managing events a seamless experience.",
    name: "Youssef Belkhayatia",
    title: "Manager at Kindy Music Club",
    image: "/youssef.jpg",
  },
  // {
  //   quote:
  //     "Jihed built a robust consulting app that streamlined our client management and reporting processes. His innovative approach and technical skills helped us automate key workflows, saving us significant time and resources. I would gladly collaborate with him again in the future.",
  //   name: "Amenallah Jouini",
  //   title: "Founder of Jouini Consulting",
  //   image: "/Amenallah.png",
  // },
  {
    quote:
      "Jihed developed a medical store management system for FMT Club that revolutionized how we manage inventory and sales. The system is fast, user-friendly, and reliable, with seamless integration of modern tools for managing medical supplies. Jihed's ability to translate our requirements into a practical solution was remarkable.",
    name: "Omar Adassi",
    title: "Manager at FMT Club Associamed",
    image: "/omar.jpg",
  },
  // {
  //   quote:
  //     "Jihed created a trading e-learning application that transformed our ability to train aspiring traders. The app's design is sleek, and the features are highly functional, including real-time trading simulations and interactive learning modules. His dedication to the project's success was evident at every stage.",
  //   name: "Yassine Maaroufi",
  //   title: "Founder of kyros Trading E-Learning Platform",
  //   image: "/yassine.jpg",
  // },
];

export const companies = [
  {
    id: 1,
    name: "Angular",
    img: "/angular.png",
    nameImg: "Angular",
  },
  {
    id: 2,
    name: "Spring Boot",
    img: "/springboot.png",
    nameImg: "SpringBoot",
  },
  {
    id: 3,
    name: ".NET",
    img: "/dotnet.png",
    nameImg: ".Net",
  },
  {
    id: 4,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "Docker",
  },
  {
    id: 5,
    name: "MongoDB",
    img: "/mongodb.png",
    nameImg: "MongoDB",
  },
  {
    id: 6,
    name: "MySQL",
    img: "/mysql.png",
    nameImg: "MySql",
  },
  {
    id: 7,
    name: "PostgreSQL",
    img: "/postgres.png",
    nameImg: "PostgreSQL",
  },
  {
    id: 8,
    name: "Azure DevOps",
    img: "/azure.png",
    nameImg: "Azure DevOps",
  },
  {
    id: 9,
    name: "Flask",
    img: "/flask.png",
    nameImg: "Flask",
  },
  {
    id: 10,
    name: "Git",
    img: "/git.svg",
    nameImg: "/gitName.svg",
  },
  {
    id: 11,
    name: "Java",
    img: "/java.svg",
    nameImg: "/javaName.svg",
  },
  {
    id: 12,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "TypeScript",
  },
  {
    id: 13,
    name: "Python",
    img: "/python.png",
    nameImg: "Python",
  },
  {
    id: 14,
    name: "JavaScript",
    img: "/js.png",
    nameImg: "JS",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Summer Internship - OKR Strategic Management Platform",
    desc: "Assisted in the development of a strategic management platform, integrating AI and LLM to enhance system reliability and user interaction, including real-time feedback mechanisms and automated task generation.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "End of Studies Project - Recruitment Management Web Application",
    desc: "Led the design and development of a recruitment management application, building a monolithic architecture and front-end interface using Angular, and implementing web scraping functionalities.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Student Data Management System",
    desc: "Developed a custom Student Data Management System to streamline the organization and tracking of student records, including personal details, academic performance, and attendance. The system featured a user-friendly interface, secure authentication, and efficient data retrieval, ensuring reliability and ease of use for school administrators.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Summer Internship - ParkMate App",
    desc: "Developed and maintained user-facing features for a parking management application using modern technologies, focusing on enhancing user interface and interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jihed5504",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/jihed-medini",
  },
];
