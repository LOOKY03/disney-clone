import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import TheatersIcon from "@material-ui/icons/Theaters";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import windowDimensions from "react-window-dimensions";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";


const useStyles = makeStyles({
  list: {
    width: 250,
    background: 'black',
    color: 'white',
    height: '100vh',
  },
  fullList: {
    width: "auto",
  },
});

const Header = ({ width, height }) => {
  //app drawer
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Sidebar>
          <div>
            <HomeIcon />
            <span>Home</span>
          </div>
          <div>
            <SearchIcon />
            <span>Search</span>
          </div>
          <div>
            <AddIcon />
            <span>Watchlist</span>
          </div>
          <div>
            <StarIcon />
            <span>Originals</span>
          </div>
          <div>
            <TheatersIcon />
            <span>Movies</span>
          </div>
          <div>
            <LiveTvIcon />
            <span>Series</span>
          </div>
        </Sidebar>
      </List>
    </div>
  );

  return (
    <>
      <Navbar>
        {width > 1000 ? (
          <Logo src="/images/logo.svg" />
        ) : (
          <div>
            {" "}
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <ArrowLeftIcon onClick={toggleDrawer(anchor, true)}>
                  {anchor}
                </ArrowLeftIcon>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}{" "}
            <Logo src="/images/logo.svg" />
          </div>
        )}

        {width > 1000 ? (
          <NavMenu>
            <MenuItems>
              <HomeIcon />
              <span>Home</span>
            </MenuItems>
            <MenuItems>
              <SearchIcon />
              <span>Search</span>
            </MenuItems>
            <MenuItems>
              <AddIcon />
              <span>Watchlist</span>
            </MenuItems>
            <MenuItems>
              <StarIcon />
              <span>Originals</span>
            </MenuItems>
            <MenuItems>
              <TheatersIcon />
              <span>Movies</span>
            </MenuItems>
            <MenuItems>
              <LiveTvIcon />
              <span>Series</span>
            </MenuItems>
          </NavMenu>
        ) : null}

        <UserImage src="https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg" />
      </Navbar>
    </>
  );
};

export default windowDimensions()(Header);

const Navbar = styled.div`
  height: 70px;
  background-color: #090b13;
  justify-content: space-between;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-left: 20px;
  flex: 1;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`;
const MenuItems = styled.div`
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
  margin-left: 20px;
  
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  text-transform: uppercase;

  div {
    display: flex;
    padding: 20px;

    span {
      margin-left: 5px;
      letter-spacing: 1.5px;
      font-weight: 600;
    }

    &:hover {
      background-color: grey;
      border-radius: 25px;
      transition: 300ms ease-out;
    }
  }
`;
