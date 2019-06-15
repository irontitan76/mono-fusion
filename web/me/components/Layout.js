import React, { useContext, useState } from "react";
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import { Divider } from "@material-ui/core";
import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import { MenuItems, Sidebar, SidebarTitle, Slider } from "@fusion/design/lib/_v2";

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

export function PrimaryLayout({ children }) {
  const manifest = useContext(ManifestContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = global.window && window.location.pathname.split('/')[1];

  const { application, navigation } = manifest;

  const logo = (
    <img
      alt="fusion logo"
      height={32}
      src={"/static/images/fusion-logo-white.png"}
    />
  );

  const title = application && application.displayName ? (
    <>
      <SidebarTitle
        path={{ component: Link, href: "/" }}
        icon={logo}
        title={application.displayName}
      />
      <Divider
        style={{ backgroundColor: "#fff" }}
        variant="middle"
      />
    </>
  ) : null;

  const sliderMenu = navigation && navigation.secondary ? (
    <Slider
      openState={[open, setOpen]}
      items={navigation.secondary[location] || []}
    />
  ) : null;

  return (
    <div className={classes.root}>
      <Sidebar color="primary" variant="dark">
        {title}
        <MenuItems items={navigation && navigation.primary} />
      </Sidebar>
      {sliderMenu}
      { /* Clone element and pass openState */ }
      {children}
    </div>
  );
}

export default PrimaryLayout;