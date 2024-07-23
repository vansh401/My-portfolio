import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from 'react-scroll';
import ProgressBar from '../components/ProgressBar';  

const drawerWidth = 240;
const navItems = ["Home", "Projects", "Skills", "Journey","Activities", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Vansh Verma
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: selectedItem === item && item !== "Contact" ? "white" : "inherit",
              }}
              onClick={() => handleItemClick(item)}
            >
              <ScrollLink
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleItemClick(item)}
              >
                <ListItemText primary={item} />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const lastItemIndex = navItems.length - 1;

  return (
    <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline/>
      <ProgressBar />
      <AppBar
        component="nav"
        sx={{
           // width:"99vw",
          // marginRight:"10px",
          color: "white",
          marginTop: 0.5,
          background: "rgba(15, 18, 20, 0.08)",
          boxShadow:
            "#00f0fc 0px 6px 20px -20px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              marginLeft: "25px",
              display: "flex",
            }}
          >
            <div
              style={{
                borderRadius: "30px",
                border: "2px solid white",
                width: "35px",
                height: "35px",
                marginRight: "18px",
              }}
            ></div>
            <span style={{ fontFamily: `"Exo 2", sans-serif` }}>Vansh Verma</span>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <ScrollLink
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleItemClick(item)}
              >
                <Button
                  style={{ fontFamily: `"Exo 2", sans-serif`, letterSpacing: 2, fontWeight: 800 }}
                  sx={{
                    marginRight: "40px",
                    backgroundColor: index === lastItemIndex ? "yellow" : "none",
                    color:
                      index === lastItemIndex
                        ? "black"
                        : selectedItem === item
                          ? "white"
                          : "#848884",
                    "&:hover": {
                      backgroundColor: index === lastItemIndex ? "yellow" : "none",
                      color: index === lastItemIndex ? "black" : "#C0C0C0",
                    },
                  }}
                >
                  {item}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        sx={{ marginTop: 11 }}></Box>
    </Box>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;