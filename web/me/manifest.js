import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define all static data here (figure out internationalization)
// Define link component used throughout (make my own Link component to handle relevant Link types)
// Queries should occur on each page and be made so that one request is executed

export const manifest = {
  application: {
    displayName: "Fusion",
    name: 'fusion',
    build: '0001a',
    version: 'beta',
  },
  company: {
    address: {},
    email: 'ross_sheppard@outlook.com',
    logo: './static/images/fusion-logo-white.png',
    name: 'Fusion Industries',
    phone: '',
    slogan: 'Optimizing Business Through Intelligent Design',
  },
  navigation: {
    component: Link,
    primary: [
      {
        icon: <FontAwesomeIcon icon={["fal", "user-tie"]} />,
        label: "People",
        path: { component: Link, href: "/people" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "binoculars"]} />,
        label: "Insights",
        path: { component: Link, href: "/insights" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "code"]} />,
        label: "Technology",
        path: { component: Link, href: "/tech" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "project-diagram"]} />,
        label: "Projects",
        path: { component: Link, href: "/projects" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "database"]} />,
        label: "Data",
        path: { component: Link, href: "/data" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "palette"]} />,
        intent: 'changeTheme',
        label: "Change theme",
      }
    ],
    secondary: {
      people: [
        {
          icon: <FontAwesomeIcon icon={["fal", "money-check"]} />,
          label: "Payroll",
          path: { component: Link, href: "/people/payroll" },
        },
        {
          icon: <FontAwesomeIcon icon={["fal", "calendar-alt"]} />,
          label: "Schedule",
          path: { component: Link, href: "/people/schedule" },
        },
        { 
          icon: <FontAwesomeIcon icon={["fal", "umbrella-beach"]} />,
          label: "Benefits",
          path: { component: Link, href: "/people/benefits" },
        },
        {
          icon: <FontAwesomeIcon icon={["fal", "user-plus"]} />,
          label: "Talent",
          path: { component: Link, href: "/people/talent" },
        },
      ],
    },
  },
  pages: {
    insights: {
      markdown: {},
      markdownCodebar: {
        buttons: [
          ["copy", <FontAwesomeIcon style={{ fontSize: 18 }} icon={["fal", "copy"]} />],
          {
            component: "a",
            href: "https://github.com",
            icon: <FontAwesomeIcon icon={["fab", "github"]} />,
            target: "_blank",
            title: "Go to source",
          },
        ],
      },
      contents: { title: "Contents" },
      slideout: { title: "Details" },
      titlebar: {
        button: "Manage Insights",
        title: "Insights",
      },
    },
    people: {
      record: {
        headers: [
          { value: 'Name' },
          { value: 'Primary Email' },
          { value: 'Primary Phone' },
          { value: 'Status' },
        ],
        rows: [
          { name: 'name', email: 'email', phone: 'phone', status: 'status' },
          {},
        ],
      },
      slideout: { title: "Details" },
      titlebar: {
        button: "Manage People",
        title: "People",
      },
    },
    tech: {},
  },
  footer: {},
};

export default manifest;
