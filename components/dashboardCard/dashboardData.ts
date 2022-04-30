import { ImPlay3 } from 'react-icons/im'
import { FaCrown } from 'react-icons/fa'
import { IoIosRocket } from "react-icons/io"

export const cardInfo = [
  {
    id: 1,
    title: 'Introduction to the Course',
    desc: "If you're new to Frontend Simplified, start here to get an introduction to the best coding course ever made!",
    links: [
      { link: 'Course Introduction', linkTo: '/', icon: ImPlay3 },
      {
        link: 'Mindset and Motivation',
        linkTo: '/introduction/motivation',
        icon: ImPlay3,
      },
      {
        link: 'Environment Setup',
        linkTo: '/introduction/setup',
        icon: ImPlay3,
      },
      { link: 'GitHub Setup', linkTo: '/introduction/github', icon: ImPlay3 },
    ],
  },
  {
    id: 2,
    title: 'Week 1',
    desc: 'Get familiar with writing HTML and learn top-tech best practises to create your first website.',
    links: [
      { link: 'HTML Crash Course', linkTo: '/html/crashcourse', icon: ImPlay3 },
      {
        link: 'Top Tech Best Practices',
        linkTo: '/html/bestpractices',
        icon: IoIosRocket,
      },
      { link: 'CSS Crash Course', linkTo: '/css/crashcourse', icon: ImPlay3 },
      { link: 'Flexbox Layout', linkTo: '/css/flexbox', icon: IoIosRocket },
      {
        link: 'Top Tech Best Practises',
        linkTo: '/css/bestpractices',
        icon: FaCrown,
      },
    ],
  },
  {
    id: 3,
    title: 'Week 2',
    desc: 'Bring HTML and CSS theory to life by building professionally designed projects for your portfolio.',
    links: [
      {
        link: 'Build Your First Website',
        linkTo: '/miniproject/build',
        icon: IoIosRocket,
      },
      {
        link: 'Style Your First Website',
        linkTo: '/miniproject/style',
        icon: IoIosRocket,
      },
      {
        link: 'Mobile Responsivenss',
        linkTo: '/miniproject/responsive',
        icon: IoIosRocket,
      },
      {
        link: 'E-Portfolio Project Tutorial',
        linkTo: '/projects/eportfolio',
        icon: FaCrown,
      },
      {
        link: 'E-Commerce Project Tutorial',
        linkTo: '/projects/ecommerce',
        icon: IoIosRocket,
      },
      {
        link: 'Final Project Tutorial',
        linkTo: '/projects/final',
        icon: FaCrown,
      },
    ],
  },
  {
    id: 4,
    title: 'Week 3',
    desc: 'Learn the JavaScript foundations to make your websites interactive and dynamic.',
    links: [
      {
        link: 'JavaScript Crash Course',
        linkTo: '/javascript/crashcourse',
        icon: ImPlay3,
      },
      {
        link: 'JavaScript Beginner Challenges',
        linkTo: '/javascript/beginner',
        icon: FaCrown,
      },
      {
        link: 'JavaScript Medium Challenges',
        linkTo: '/javascript/medium',
        icon: FaCrown,
      },
      {
        link: 'JavaScript Advanced Challenges',
        linkTo: '/javascript/hard',
        icon: FaCrown,
      },
    ],
  },
  {
    id: 5,
    title: 'Week 4',
    desc: 'Build dynamic and interactive websites by bringing together everything you have learnt in the HTML, CSS and JavaScript sections.',
    links: [
      {
        link: 'Advanced E-Portfolio',
        linkTo: '/eportfolio/advanced',
        icon: IoIosRocket,
      },
      {
        link: 'Advanced E-Commerce Application',
        linkTo: '/eportfolio/ecommerce',
        icon: IoIosRocket,
      },
      {
        link: 'Final Project Preparation',
        linkTo: '/eportfolio/preparation',
        icon: FaCrown,
      },
      {
        link: 'Final JavaScript Project',
        linkTo: '/eportfolio/final',
        icon: FaCrown,
      },
    ],
  },
  {
    id: 6,
    title: 'Week 5',
    desc: 'Learn how top tech companies use the most popular JavaScript framework, React.JS, to build large scale web applications.',
    links: [
      { link: 'React Enviornment Setup', linkTo: '/react', icon: ImPlay3 },
      {
        link: 'React Crash Course',
        linkTo: '/react/crashcourse',
        icon: ImPlay3,
      },
      {
        link: 'React E-Commerce Application',
        linkTo: '/react/ecommerce',
        icon: IoIosRocket,
      },
      {
        link: 'Firebase Introduction',
        linkTo: '/firebase/introduction',
        icon: IoIosRocket,
      },
      {
        link: 'Firebase Authentication',
        linkTo: '/firebase/auth',
        icon: IoIosRocket,
      },
      {
        link: 'Firebase Firestore',
        linkTo: '/firebase/firestore',
        icon: IoIosRocket,
      },
    ],
  },
  {
    id: 7,
    title: 'Week 6',
    desc: 'Time to bring together eveything you have learnt to build four massive projects for your portfolio.',
    links: [
      { link: 'Top Tech Clones', linkTo: '/clones', icon: FaCrown },
      {
        link: 'Final Project Preparation',
        linkTo: '/final/preparation',
        icon: FaCrown,
      },
      { link: 'Final React Project', linkTo: '/final', icon: FaCrown },
    ],
  },
  {
    id: 8,
    title: 'Time to Apply For Jobs!',
    desc: 'Learn game-changing job application tips to get ahead of your competition in your job search.',
    links: [
      {
        link: 'Build an Impressive Resume',
        linkTo: '/application/resume',
        icon: FaCrown,
      },
      {
        link: 'The BEST Cover Letter',
        linkTo: '/application/coverletter',
        icon: FaCrown,
      },
      {
        link: 'How to Play The LinkedIn Game',
        linkTo: '/application/linkedin',
        icon: FaCrown,
      },
      {
        link: 'E-Portfolio Tips and Tricks',
        linkTo: '/application/portfolio',
        icon: FaCrown,
      },
      {
        link: 'How to Apply to Jobs',
        linkTo: '/application/apply',
        icon: FaCrown,
      },
    ],
  },
  {
    id: 9,
    title: 'Interview Preparation',
    desc: 'Attempt real-world frontend developer interview questions for jobs ranging from $80,000 to $100,000+ per year.',
    links: [
      {
        link: 'JavaScript Trivia Questions',
        linkTo: '/interviews/jstrivia',
        icon: FaCrown,
      },
      {
        link: 'CSS Trivia Questions',
        linkTo: '/interviews/csstrivia',
        icon: FaCrown,
      },
      {
        link: 'Advanced JavaScript Questions Setup',
        linkTo: '/interviews/javascript',
        icon: FaCrown,
      },
      {
        link: 'Reverse String',
        linkTo: '/interviews/javascript/reversestring',
        icon: FaCrown,
      },
      {
        link: 'Palindrome',
        linkTo: '/interviews/javascript/palindrome',
        icon: FaCrown,
      },
      {
        link: 'Reverse Integer',
        linkTo: '/interviews/javascript/reverseinteger',
        icon: FaCrown,
      },
      {
        link: 'Stringify ID',
        linkTo: '/interviews/javascript/stringifyid',
        icon: FaCrown,
      },
      {
        link: 'Maximum Character',
        linkTo: '/interviews/javascript/stringifyid',
        icon: FaCrown,
      },
      {
        link: 'Anagrams',
        linkTo: '/interviews/javascript/anagrams',
        icon: FaCrown,
      },
      {
        link: 'Array Chunk',
        linkTo: '/interviews/javascript/arraychunk',
        icon: FaCrown,
      },
      {
        link: 'Capitalize Sentences',
        linkTo: '/interviews/javascript/capitalize',
        icon: FaCrown,
      },
      { link: 'Steps', linkTo: '/interviews/javascript/steps', icon: FaCrown },
      {
        link: 'Pyramid',
        linkTo: '/interviews/javascript/pyramid',
        icon: FaCrown,
      },
      {
        link: "Concurrent API's ($100k+)",
        linkTo: '/interviews/1',
        icon: FaCrown,
      },
    ],
  },
]
