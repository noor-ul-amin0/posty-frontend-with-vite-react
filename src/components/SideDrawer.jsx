import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

export default function SideDrawer({ sideItems, isDrawerOpen, toggleDrawer }) {
  const {
    state: { isAuthenticated },
  } = useStateMachine();
  const navigate = useNavigate();
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sideItems.map(({ id, title, icon: Icon, link, isProtected }) =>
          isProtected && !isAuthenticated ? null : (
            <ListItem button key={id} onClick={() => navigate(link || "/")}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
