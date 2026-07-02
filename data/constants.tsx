import { ExperienceType, ProjectType, SkillGroupType } from '@/types'

export const skills: SkillGroupType[] = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React Js',
        image: '/images/react-logo.svg',
      },
      {
        name: 'Tailwind CSS',
        image: '/images/tailwindcss-logo.png',
      },
      {
        name: 'Next Js',
        image: '/images/nextjs-logo.png',
      },
      {
        name: 'HTML',
        image: '/images/html5-logo.png',
      },
      {
        name: 'CSS',
        image: '/images/css-logo.png',
      },
      {
        name: 'JavaScript',
        image: '/images/javascript-logo.png',
      },
      {
        name: 'TypeScript',
        image: '/images/typescript-logo.png',
      },
      {
        name: 'Bootstrap',
        image: '/images/bootstrap-logo.png',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node Js',
        image: '/images/nodejs-logo.svg',
      },
      {
        name: 'Express Js',
        image: '/images/express-logo.png',
      },
      {
        name: 'Nest Js',
        image: '/images/nestjs.svg',
      },
      {
        name: 'Python',
        image: '/images/python-logo.svg',
      },
      {
        name: 'SQL',
        image: '/images/sql.png',
      },
      {
        name: 'PostgreSQL',
        image: '/images/postgresql.png',
      },

      {
        name: 'MongoDB',
        image: '/images/mongodb-logo.svg',
      },
      {
        name: 'Prisma',
        image: '/images/prisma-logo.png',
      },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      {
        name: 'Bash',
        image: '/images/bash-logo.svg',
      },
      {
        name: 'Google Cloud',
        image: '/images/google-cloud-logo.png',
      },
      {
        name: 'AWS',
        image: '/images/aws-logo.png',
      },
      {
        name: 'Docker',
        image: '/images/docker-logo-wordmark.svg',
      },
      {
        name: 'CI/CD',
        image: '/images/ci-cd.png',
      },
      {
        name: 'Nginx',
        image: '/images/nginx-logo.png',
      },
      {
        name: 'Kubernetes',
        image: '/images/kubernetes.png',
      },
    ],
  },
  {
    title: 'Others',
    skills: [
      {
        name: 'Git',
        image: '/images/git-logo.png',
      },
      {
        name: 'GitHub',
        image: '/images/github-logo.png',
      },
      {
        name: 'GitLab',
        image: '/images/gitlab-logo.png',
      },
      {
        name: 'VS Code',
        image: '/images/vscode-logo.svg',
      },
      {
        name: 'Figma',
        image: '/images/figma-logo.png',
      },
      {
        name: 'Bruno',
        image: '/images/bruno.png',
      },
      {
        name: 'Playwright',
        image: '/images/playwright-logo.png',
      },
    ],
  },
]

export const experiences: ExperienceType[] = [
  {
    id: 2,
    img: '/images/brainhub-logo.jpg',
    role: 'Fullstack Developer',
    company: 'Brainhub',
    date: 'April 2024 - August 2024',
    desc: 'As a Fullstack Developer, I have effectively utilized modern front-end and back-end technologies to develop responsive and dynamic web applications. I focused on creating and integrating REST APIs to ensure efficient and secure communication. For code management and team collaboration, I relied on GitHub and GitLab. Automating deployment processes using CI/CD tools and Docker ensured the high quality and reliability of applications. Implementing Test Driven Development (TDD) and Playwright allowed me to deliver stable and well-tested solutions. In back-end development, I primarily utilized Next.js and the Prisma ORM to efficiently manage PostgreSQL databases. Additionally, I have experience developing Progressive Web Apps (PWAs), providing high-performance applications with offline availability for users.',
    skills: [
      'React',
      'Next',
      'TypeScript',
      'JavaScript',
      'Github',
      'Gitlab',
      'REST API',
      'Tailwind CSS',
      'CI/CD',
      'Docker',
      'Playwright',
      'Test Driven Development',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'PWA',
    ],
  },
  {
    id: 1,
    img: '/images/snap-outdoor-logo.png',
    role: 'IT specialist',
    company: 'Snap Outdoor Sp. z o.o',
    date: 'October 2022 - September 2023',
    desc: "I was responsible for troubleshooting issues related to software, computer hardware, and network infrastructure. I managed databases, assisted in configuring and monitoring cloud resources. Additionally, I participated in projects related to the expansion and update of IT infrastructure, ensuring the smooth implementation of new solutions. I developed skills in effective communication and quick response to outages or user needs to maintain the continuity of the company's IT systems.",
    skills: [
      'MySQL',
      'Python',
      'Docker',
      'Database Management',
      'Cloud Resource Management',
      'Problem Solving Skills',
      'Project Management',
      'AWS',
    ],
  },
  {
    id: 0,
    img: '/images/ynsat.jpg',
    role: 'Frontend Developer',
    company: 'YNSAT',
    date: 'January 2022 - September  2022',
    desc: 'As a frontend developer at Mapiblocks (YNSAT), my responsibilities included developing user interfaces and ensuring that Mapiblocks-based applications provide intuitive, visually appealing, and efficient solutions for users. Working within an international team at Mapiblocks provided me with valuable cross-cultural insights into web development and collaborative practices, enriching my professional experience.',
    skills: [
      'Angular',
      'React',
      'Ionic',
      'TypeScript',
      'Rest API',
      'Github',
      'RWD',
    ],
  },
]

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Truth or Dare',
    date: 'July 2023 - August 2023',
    description:
      'Web app for playing truth or dare with friends. Players create game sessions, invite others, and choose between different game modes. The app distributes unique cards to each player and tracks their choices to prevent someone from picking "truth" too many times in a row. Features an admin panel for managing the card database and adding new challenges. Players can also set custom rules, like penalties for skipping a challenge, making each game session unique.',
    image: '/images/cards.png',
    tags: ['React Js', 'Bootstrap', 'Node Js', 'Express Js', 'MongoDb'],
    webapp: 'https://dawidzygmuntdev.pl/cards',
  },
  {
    id: 2,
    title: 'E-Commerce CMS',
    date: 'Apr 2023 - Aug 2023',
    description:
      'Content management system for running an online store. Built with Next.js using server-side rendering for fast page loads. Store owners can manage their entire inventory, organize products into categories, process orders, and update content through a centralized admin panel. The interface handles everything from adding new products with images and descriptions to tracking order status and managing customer data.',
    image: '/images/ecommerce-cms.png',
    tags: ['Next Js', 'Prisma', 'Tailwind', 'Prisma', 'React Js', 'MySQL'],
    webapp: 'https://dawidzygmuntdev.pl/e-commerce',
  },
  {
    id: 3,
    title: 'E-Commerce store',
    date: 'Apr 2023 - Aug 2023',
    description:
      'Customer-facing online store with full shopping functionality. Users can browse products by category, add items to their cart, and complete purchases through integrated payment processing. The checkout flow handles order confirmation and connects to the delivery system. Works with the E-Commerce CMS for product data and inventory management.',
    image: '/images/ecommerce-store.png',
    tags: ['Next Js', 'Prisma', 'Tailwind', 'MySQL'],
    webapp: 'https://dawidzygmuntdev.pl/store',
  },
  {
    id: 4,
    title: 'Anthill',
    date: 'February 2024 - February 2024',
    description:
      'Time tracking platform for logging work hours and activities. Users can track time in real-time or add entries retroactively. Each activity gets categorized so you can see where your time actually goes. At the end of each week, you can close the timesheet to finalize hours for reporting. Built as a PWA so it works offline and sends push notifications to remind you to log your time.',
    image: '/images/Anthillv2.png',
    tags: [
      'Next Js',
      'Prisma',
      'PostgreSQL',
      'Tailwind',
      'PWA',
      'Notifications',
    ],
    webapp: 'https://dawidzygmuntdev.pl/anthill-v2',
  },
  {
    id: 5,
    title: 'Marketing Agency',
    date: 'July 2024 - July 2024',
    description:
      'Marketing agency website showcasing services, portfolio work, and client testimonials. Fully responsive design that works across all devices with smooth scroll animations and transitions. This is a demonstration project focused on front-end design and user experience - it doesn\'t include backend functionality or a real content management system.',
    image: '/images/agency.png',
    tags: ['React', 'Tailwind'],
    webapp: 'https://dawidzygmuntdev.pl/agency',
  },
]
