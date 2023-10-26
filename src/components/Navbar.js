import React from "react";
import { AppBar, Button, Toolbar, Typography, Link } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
          Treforest Service Centre
        </Typography>

        <a href="/">
          <img
            src="../../images/TSC_LOGO.png" // Adjust the path to your image
            alt="LOGO"
            className="img-fluid"
            height={100}
            width={200}
          />
        </a>

        <nav>
          <Link className="px-2" href="/my-bookings">
            My Bookings
          </Link>
          <Link className="px-2" href="/contact">
            Contact
          </Link>
          <Button className="mx-2" href="/signin" variant="outlined">
            Login
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
