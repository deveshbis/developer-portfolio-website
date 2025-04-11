import tourism from "../src/assets/projects/tourism.png";
import booknest from "../src/assets/projects/booknest.png";
import food from "../src/assets/projects/food.png";
import newspaper from "../src/assets/projects/newspaper.png";

const projects = [
  {
    projectName: "BookNest",
    image: booknest,
    description:
      "BookNest is an e-commerce site for book lovers with cart, wishlist, secure checkout, and admin dashboard features.",
    tech: [
      "Next.js",
      "Tailwindcss",
      "Node.js",
      "MongoDb",
      "Stripe",
      "Express.js",
    ],
    liveLink: "https://booknest-self.vercel.app",
    clientCode: "https://github.com/azaaaaaaaaad/booknest",
    serverCode: "https://github.com/azaaaaaaaaad/booknest",
  },

  {
    projectName: "Online-Newspaper",
    image: newspaper,
    description:
      "Online Newspaper offers real-time news with secure login, dynamic categories, and seamless backend content management.",
    tech: [
      "React.js",
      "Tailwindcss",
      "Node.js",
      "MongoDb",
      "Stripe",
      "Firebase",
      "Express.js",
    ],
    liveLink: "https://newspaper-website-1931a.web.app",
    clientCode: "https://github.com/deveshbis/online-newspaper-client-site",
    serverCode: "https://github.com/deveshbis/online-newspaper-server-site",
  },

  {
    projectName: "Tourism-management",
    image: tourism,
    description:
      "Tourism-management showcases Southeast Asian spots with detailed pages, login system, and interactive travel features.",
    tech: [
      "React.js",
      "Tailwindcss",
      "Node.js",
      "MongoDb",
      "Firebase",
      "Express.js",
    ],
    liveLink: "https://tourism-management-33d7c.web.app",
    clientCode: "https://github.com/deveshbis/tourism-management-client-site",
    serverCode: "https://github.com/deveshbis/tourism-management-server-site",
  },

  {
    projectName: "Food-management",
    image: food,
    description:
      "Food-management is a CRUD-based web app with login, food item management, and responsive user interface.",
    tech: [
      "React.js",
      "Tailwindcss",
      "Node.js",
      "MongoDb",
      "Firebase",
      "Express.js",
    ],
    liveLink: "https://foods-master-487ce.web.app",
    clientCode: "https://github.com/deveshbis/food-management-system-client-site",
    serverCode: "https://github.com/deveshbis/food-management-server-site",
  },
];

export default projects;

