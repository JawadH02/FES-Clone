import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import {
  FaListUl,
  FaHtml5,
  FaReact,
  FaProjectDiagram,
  FaKeyboard,
} from 'react-icons/fa'
import { MdWebStories } from 'react-icons/md'
import { SiJavascript } from 'react-icons/si'
import { TiTabsOutline } from 'react-icons/ti'
import { GiPayMoney } from 'react-icons/gi'

export const sidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: FaListUl,
  },
  {
    title: 'Start Here',
    path: '/assets/div.png',
    icon: FaHtml5,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'Course Introduction',
        path: "/"
      },
      {
        title: 'Mindset & Motivation',
        path: '/introduction/motivation',
      },
      {
        title: 'Environment Setup',
        path: '/introduction/setup',
      },
      {
        title: 'GitHub Setup',
        path: "/introduction/github"
      },
    ],
  },
  {
    title: 'Week 1',
    path: '/week1',
    icon: FaHtml5,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'HTML',
        disabled: true
      },
      {
        title: 'Crash Course',
        path: '/html/crashcourse',
      },
      {
        title: 'Best Practices',
        path: '/html/bestpractises',
      },
      {
        title: 'CSS',
        disabled: true
      },
      {
        title: 'Crash Course',
        path: '/css/crashcourse',
      },
      {
        title: 'Flexbox Layout',
        path: '/css/flexbox',
      },
      {
        title: 'Best Practises',
        path: '/css/bestpractises',
      },
    ],
  },
  {
    title: 'Week 2',
    path: '/week2',
    icon: MdWebStories,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'Mini Project',
        disabled: true
      },
      {
        title: 'Build your website',
        path: '/miniproject/build',
      },
      {
        title: 'Style your website',
        path: '/miniproject/style',
      },
      {
        title: 'Responsiveness',
        path: '/miniproject/responsive',
      },
      {
        title: 'Projects',
        disabled: true
      },
      {
        title: 'E-Portfolio',
        path: '/projects/eportfolio',
      },
      {
        title: 'E-Commerce',
        path: '/projects/ecommerce',
      },
      {
        title: 'Final Project',
        path: '/projects/final',
      },
    ],
  },
  {
    title: 'Week 3',
    path: '/week3',
    icon: SiJavascript,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'JavaScript',
        disabled: true
      },
      {
        title: 'Crash Course',
        path: '/javascript/crashcourse',
      },
      {
        title: 'Beginner Challenges',
        path: '/javascript/beginner',
      },
      {
        title: 'Medium Challenges',
        path: '/javascript/medium',
      },
      {
        title: 'Advanced Challenges',
        path: '/javascript/hard',
      },
    ],
  },
  {
    title: 'Week 4',
    path: '/week4',
    icon: TiTabsOutline,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'Advanced Projects',
        disabled: true
      },
      {
        title: 'Advanced Portfolio',
        path: '/eportfolio/advanced',
      },
      {
        title: 'E-Commerce App',
        path: '/eportfolio/ecommerce',
      },
      {
        title: 'Final Preparation',
        path: '/eportfolio/preparation',
      },
      {
        title: 'Final Project',
        path: '/eportfolio/final',
      },
    ],
  },
  {
    title: 'Week 5',
    path: '/week5',
    icon: FaReact,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'React',
        disabled: true
      },
      {
        title: 'React Setup',
        path: '/react',
      },
      {
        title: 'Crash Course',
        path: '/react/crashcourse',
      },
      {
        title: 'E-Commerce App',
        path: '/react/ecommerce',
      },
      {
        title: 'Firebase',
      },
      {
        title: 'Intro to Firebase',
        path: '/firebase/introduction',
      },
      {
        title: 'Authentication',
        path: '/firebase/auth',
      },
      {
        title: 'Firestore',
        path: '/firebase/firestore',
      },
    ],
  },
  {
    title: 'Week 6',
    path: '/week6',
    icon: FaProjectDiagram,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'Clones',
        disabled: true
      },
      {
        title: 'Project Clones',
        path: '/clones',
      },
      {
        title: 'Final Project',
      },
      {
        title: 'Final Preparation',
        path: '/final/preparation',
      },
      {
        title: 'Final Project',
        path: '/final',
      },
    ],
  },
  {
    title: 'Job Application',
    path: '/application',
    icon: GiPayMoney,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'Resume',
        path: '/application/resume',
      },
      {
        title: 'Cover Letter',
        path: '/application/coverletter',
      },
      {
        title: 'LinkedIn',
        path: '/application/linkedin',
      },
      {
        title: 'Portfolio Tips',
        path: '/application/portfolio',
      },
      {
        title: 'How To Apply',
        path: '/application/apply',
      },
    ],
  },
  {
    title: 'Interviews',
    path: '/interviews',
    icon: FaKeyboard,
    iconClosed: BsChevronDown,
    iconOpened: BsChevronUp,
    subNav: [
      {
        title: 'First Round',
        disabled: true
      },
      {
        title: 'JS Trivia',
        path: '/interviews/jstrivia',
      },
      {
        title: 'CSS Trivia',
        path: '/interviews/csstrivia',
      },
      {
        title: 'Second Round',
        disabled: true
      },
      {
        title: 'Introduction',
        path: '/interviews/javascript',
      },
      {
        title: 'Reverse String',
        path: '/interviews/javascript/reversestring',
      },
      {
        title: 'Palindrome',
        path: '/interviews/javascript/palindrome',
      },
      {
        title: 'Reverse Integer',
        path: '/interviews/javascript/reverseinteger',
      },
      {
        title: 'Stringify ID',
        path: '/interviews/javascript/stringifyid',
      },
      {
        title: 'Max Character',
        path: '/interviews/javascript/stringifyid',
      },
      {
        title: 'Anagrams',
        path: '/interviews/javascript/anagrams',
      },
      {
        title: 'Array Chunk',
        path: '/interviews/javascript/arraychunk',
      },
      {
        title: 'Capitalize Sentence',
        path: '/interviews/javascript/capitalize',
      },
      {
        title: 'Steps',
        path: '/interviews/javascript/steps',
      },
      {
        title: 'Pyramid',
        path: '/interviews/javascript/pyramid',
      },
      {
        title: 'Third Round',
        disabled: true
      },
      {
        title: '$100K+ Question',
        path: '/interviews/1',
      },
    ],
  },
]
