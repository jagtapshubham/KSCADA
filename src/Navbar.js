import React, { useState } from "react";
import user from "./user.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";

function Navbar() {
  const [dropdownEl, setDropdownEl] = useState(null);

  const handleDropdownOpen = (event) => {
    setDropdownEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownEl(null);
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#000435" }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            KSCADA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">Performance</Button>
            <Button color="inherit">Finance</Button>
            <Button color="inherit">Sales</Button>
            <Button color="inherit">Quality</Button>
            <Button color="inherit">Production</Button>
          </Box>
          <Button
            variant="contained"
            onClick={handleDropdownOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#000435",
              color: "inherit",
            }}
          >
            <img
              src={user}
              className="User-icon"
              alt="user-icon"
              style={{ width: 24, height: 24 }}
            />
            <span>Super Admin</span>
          </Button>
          <Menu
            anchorEl={dropdownEl}
            open={Boolean(dropdownEl)}
            onClose={handleDropdownClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={handleDropdownClose}>Profile</MenuItem>
            <MenuItem onClick={handleDropdownClose}>About</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Settings</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
