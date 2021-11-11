import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import pj from '../../package.json';

const styles = {
  flexGrow: 1,
  color: 'white',
};

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: 22,
    "&:hover": {
      borderBottom: "1px solid white",
    }
  }
});


function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Box sx={{ ...styles }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Link to={"/"} className={classes.link}>
            <Typography variant="h6" component="div" sx={{ ...styles }}>
              Axie Prime
            </Typography>
          </Link>
          <Button size="large" onClick={handleMenu} edge="start" color="inherit" sx={{ mr: 2 }} className={classes.link}>
            Tools
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/axie-roi"} >
                <Typography variant="h6" component="div" sx={{ color:'black' }}>
                  Axie Roi
                </Typography>
              </Link>
            </MenuItem>
          </Menu>
          <Link to="/about" style={{ position: 'absolute', right: 5 }} className={classes.link}>
            <Typography variant="h6" component="div" sx={{ ...styles }}>
              About
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;