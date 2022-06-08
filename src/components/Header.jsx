import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import { Button, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Userfront from "@userfront/react";
import { useStateMachine } from "little-state-machine";
import { logout } from "../actions";

export default function NavBar() {
  const {
    actions,
    state: { isAuthenticated },
  } = useStateMachine({ logout });
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const items = [
    {
      id: 1,
      title: "My Posts",
      icon: <MarkAsUnreadIcon />,
      link: "posts",
      isProtected: true,
    },
    { id: 2, title: "Send email", icon: <InboxIcon />, isProtected: false },
  ];
  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(state);
  };
  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
    Userfront.logout();
    actions.logout();
    // navigate("/profile");
  };
  const handleProfileClick = async () => {
    setAnchorEl(null);
    navigate("/profile");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <span style={{ cursor: "pointer" }}>Posty</span>
            </Typography>
            {!isAuthenticated && (
              <Button color="inherit" onClick={() => navigate("login")}>
                Login
              </Button>
            )}
            {!isAuthenticated && (
              <Button color="inherit" onClick={() => navigate("signup")}>
                Sign Up
              </Button>
            )}

            <>
              {isAuthenticated && (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              </Menu>
            </>
          </Toolbar>
        </AppBar>
      </Box>
      <SideDrawer
        sideItems={items}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}
