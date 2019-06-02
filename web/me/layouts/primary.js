import React, { useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { makeStyles } from '@material-ui/styles';
import { Divider } from "@material-ui/core";

import MenuItems from "@fusion/design/lib/_v2/Menu/MenuItems";
import Sidebar from "@fusion/design/lib/_v2/Sidebar/Sidebar";
import SidebarTitle from "@fusion/design/lib/_v2/Sidebar/SidebarTitle";
import Slider from "@fusion/design/lib/_v2/Slider/Slider";

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';
  return {
    root: {
      backgroundColor: isDark ? palette.background.default : '#fff',
      display: "flex",
      height: "auto",
    },
  };
});

export function PrimaryLayout({ children, setTint }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = global.window && window.location.pathname.split('/')[1];
  
  const primaryMenu = [
    {
      icon: <FontAwesomeIcon icon={["fal", "user-tie"]} />,
      label: "People",
      path: { component: Link, href: "/people" },
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
      label: "Change theme",
      onClick: () => setTint(),
    }
  ];

  const secondaryMenu = {
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
  };

  const logo = (
    <img
      alt="fusion logo"
      height={32}
      src={"/static/images/fusion-logo-white.png"}
    />
  );

  return (
    <div className={classes.root}>
      <Sidebar color="primary" variant="dark">
        <SidebarTitle
          path={{ component: Link, href: "/" }}
          icon={logo}
          title="Fusion"
        />
        <Divider
          style={{ backgroundColor: "#fff" }}
          variant="middle"
        />
        <MenuItems items={primaryMenu} />
      </Sidebar>
      <Slider
        openState={[open, setOpen]}
        items={secondaryMenu[location] || []}
      />
      {children}
    </div>
  );
}

export default PrimaryLayout;