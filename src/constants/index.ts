import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  paypalCryptoImage,
  sixConnexImage,
  bancolombiaImage,
  aaaInsuranceImage,
  eyewalletImage,
  davidWeekleyImage,
  ambientesInteligentesImage,
  labSatoshiImage,
  angular,
  bitcoin,
  ethereum,
  java,
  mysql,
  python,
  ruby,
  solidity,
  labsatoshi,
  backend,
  blockchain,
  web,
  typescript,
  reactjs,
  nodejs,
  andrios,
  docker,
  paypal,
  bancolombia,
  ambientesinteligentes,
  sixconnex,
  vue,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },
  {
    title: "Mobile Developer",
    icon: andrios,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Bitcoin",
    icon: bitcoin,
  },
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Engineer",
    companyName: "PayPal",
    icon: paypal,
    iconBg: "#383E56",
    date: "September 2021 - Present",
    points: [
      "Contributed to the development of PYUSD, the first stablecoin backed by PayPal, as part of the crypto team.",
      "Enhanced PayPal Crypto platform by integrating APIs and creating endpoints in Node.js (Express) for frontend consumption using React.",
      "Implemented Smart Contract development with web3 and Solidity.",
      "Improved platform functionality, increasing user engagement and adoption. The launch of PYUSD garnered significant attention and usage.",
      "Developed proficiency in Node.js, React.js, and Smart Contract development, while gaining insights into blockchain technology and cryptocurrency markets.",
    ],
  },
  {
    title: "Full Stack Engineer",
    companyName: "6Connex",
    icon: sixconnex,
    iconBg: "#E6DEDD",
    date: "March 2021 - December 2022",
    points: [
      "Served as Tech Leader for the mobile team, developing architectural guidelines for the 6Connex mobile application and its fusion with Eventory.",
      "Migrated Java Spring legacy code to Vue.js, Python, and Node.js using AWS Lambdas to enhance scalability and performance.",
      "Led the migration process, adhering to clean architecture principles and best practices in software development.",
      "Improved application performance and scalability, resulting in a smoother user experience and increased customer satisfaction.",
    ],
  },
  {
    title: "Full Stack Engineer",
    companyName: "Bancolombia",
    icon: bancolombia,
    iconBg: "#383E56",
    date: "March 2020 - March 2021",
    points: [
      "Worked on tu360, a leasing platform, utilizing Angular for the frontend and Java Spring Boot for Microservices with DynamoDB for the backend.",
      "Implemented SOLID, Clean Code, TDD & DDD practices, and CI/CD with Azure DevOps to ensure high code quality and project success.",
      "Collaborated with the team to develop and maintain the platform, ensuring scalability, reliability, and security.",
      "Successfully delivered a robust leasing platform, contributing to improved business processes and customer satisfaction.",
    ],
  },
  {
    title: "Full Stack Engineer",
    companyName: "Lab Satoshi",
    icon: labsatoshi,
    iconBg: "#E6DEDD",
    date: "July 2019 - June 2020",
    points: [
      "Developed Globalcoin, a cryptocurrency investment platform with Vue frontend and Java Spring Boot backend, and created Smart Contracts with Solidity.",
      "Created a Crypto Wallet called Eyewallet, migrating the frontend through multiple frameworks and building the backend with Node.js/Nest.js.",
      "Developed QuantSociety, a project with Python/Django backend and React frontend to feed an AI algorithm for trading in the stock market using PyTorch, Pandas, Redis, and Kafka.",
    ],
  },
  {
    title: "Full Stack Engineer",
    companyName: "Ambientes Inteligentes SAS",
    icon: ambientesinteligentes,
    iconBg: "#383E56",
    date: "August 2017 - July 2019",
    points: [
      "Developed mobile applications for iOS & Android, and automation/home automation systems, with a focus on sound system design and optimization.",
      "Utilized C/C++ and Node.js to create robust mobile applications and automation systems.",
      "Designed sound systems using AutoCAD blueprints, ensuring optimal performance through calibration and tuning.",
      "Delivered high-quality mobile applications and automation systems, enhancing user experiences and operational efficiency.",
    ],
  },
];


const projects: TProject[] = [
  {
    name: "PayPal Crypto",
    description:
      "Contributed to the development of PYUSD, a stablecoin backed by PayPal, enhancing the PayPal Crypto platform with seamless API integrations, smart contract functionality, and user engagement features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: paypalCryptoImage,
    sourceCodeLink: "https://www.paypal.com/myaccount/crypto",
  },
  {
    name: "6Connex Virtual Events",
    description:
      "Led mobile team in migrating and modernizing legacy systems, enhancing the 6Connex virtual event platform for scalability and performance across various industries.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: sixConnexImage,
    sourceCodeLink: "https://www.6connex.com/",
  },
  {
    name: "Bancolombia Tu360",
    description:
      "Developed the Tu360 leasing platform for Bancolombia, enabling leasing simulations for cars and real estate with clean architecture and high code quality.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "dynamodb",
        color: "pink-text-gradient",
      },
    ],
    image: bancolombiaImage,
    sourceCodeLink: "https://www.bancolombia.com/tu360",
  },
  {
    name: "AAA Insurance",
    description:
      "Enhanced digital platform features for AAA Insurance, focusing on user-friendly functionalities for policy management and insurance information access.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: aaaInsuranceImage,
    sourceCodeLink: "https://mwg.aaa.com/",
  },
  {
    name: "Eyewallet Crypto",
    description:
      "Developed Eyewallet, a crypto wallet platform, building frontend with various frameworks and backend with Node.js/Nest.js, including smart contract functionality.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: eyewalletImage, 
    sourceCodeLink: "https://www.instagram.com/eyewalletapp",
  },
  {
    name: "David Weekley Homes Real Estate",
    description:
      "Contributed to the real estate digital platform at David Weekley Homes, improving customer engagement through enhanced digital property browsing experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: davidWeekleyImage,
    sourceCodeLink: "https://play.google.com/store/apps/details?id=com.davidweekleyhomes.partnersMobile&hl=en",
  },
  {
    name: "Ambientes Inteligentes",
    description:
      "Engineered iOS & Android applications and developed sound automation systems, utilizing C++ and Node.js, and designed audio systems with AutoCAD.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "autocad",
        color: "pink-text-gradient",
      },
    ],
    image: ambientesInteligentesImage,
    sourceCodeLink: "https://www.linkedin.com/company/ambientes-inteligentes/posts/?feedView=all",
  },
  {
    name: "Lab Satoshi",
    description:
      "Developed Globalcoin and QuantSociety, platforms leveraging AI for crypto and stock trading, with smart contract integration and secure backend solutions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: labSatoshiImage,
    sourceCodeLink: "https://www.linkedin.com/company/lab-satoshi/posts/?feedView=all",
  },
];


export { services, technologies, experiences, projects };
