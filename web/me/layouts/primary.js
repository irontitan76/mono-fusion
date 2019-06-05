import React, { useContext, useState } from "react";
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import { Divider } from "@material-ui/core";

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
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

export function PrimaryLayout({ children }) {
  const manifest = useContext(ManifestContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = global.window && window.location.pathname.split('/')[1];

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
          title={manifest.application.displayName}
        />
        <Divider
          style={{ backgroundColor: "#fff" }}
          variant="middle"
        />
        <MenuItems items={manifest.navigation.primary} />
      </Sidebar>
      <Slider
        openState={[open, setOpen]}
        items={manifest.navigation.secondary[location] || []}
      />
      {children}
    </div>
  );
}

export default PrimaryLayout;