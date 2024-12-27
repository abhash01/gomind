import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import logo from "../../images/logo.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        margin: "0 100px",
        "@media (max-width: 600px)": {
          margin: "0 20px", // Adjust for small screens
        },
      }}
    >
      {/* Top Bar (Subheader) */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#632B90",
          height: "60px",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: "0 20px",
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          {/* Contact Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              fontSize: "14px",
              flexWrap: "wrap",
            }}
          >
            <Phone fontSize="small" />
            <Typography variant="body2">+91-9266 464 133</Typography>
            <Email fontSize="small" />
            <Typography variant="body2">HR@groMindacademy.com</Typography>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              color: "#fff",
              mt: { xs: "10px", sm: "0" },
            }}
          >
            <Link href="#" color="inherit" aria-label="Twitter">
              <Twitter fontSize="small" />
            </Link>
            <Link href="#" color="inherit" aria-label="Instagram">
              <Instagram fontSize="small" />
            </Link>
            <Link href="#" color="inherit" aria-label="Facebook">
              <Facebook fontSize="small" />
            </Link>
            <Button color="inherit" size="small">
              Login
            </Button>
            <Button color="inherit" size="small">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navigation Bar (Main Header) */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          top: "60px",
          height: "100px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: "0 20px",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="groMind Academy" style={{ height: "60px" }} />
          </Box>

          {/* Navigation Items */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
            }}
          >
            {["Home", "About Us", "Courses", "Blog", "Contact Us"].map(
              (item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "#632B90",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    minWidth: "auto", // Ensures the button's width adapts to the content
                    padding: "10px 20px", // Adjust padding as needed
                  }}
                  variant={item === "Home" ? "contained" : "text"}
                  style={
                    item === "Home"
                      ? {
                          backgroundColor: "#632B90",
                          color: "#fff",
                          borderRadius: "20px",
                        }
                      : {}
                  }
                >
                  {item}
                </Button>
              )
            )}
          </Box>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
          },
        }}
      >
        <List>
          {["Home", "About Us", "Courses", "Blog", "Contact Us"].map(
            (item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      {/* Spacer for fixed header */}
      <Box sx={{ marginTop: "160px" }} />
    </Box>
  );
};

export default Header;
