"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

const pages = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Service", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Calendar", href: "/calendar" },
];
const settings = [
  { label: "Account", href: "/account" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Logout", href: "/logout" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="gap-5">
          {/* Mobile */}
          <Box className="sm:flex md:hidden">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  component={Link}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{ textAlign: "center", textTransform: "none" }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile and desktop */}
          <Box className="flex flex-row place-items-center gap-2">
            <Link href={"/"}>
              <Image src="/icon.png" width={60} height={60} alt="CSHS logo" />
            </Link>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href={"/"}
              className="align-middle font-bold"
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GSMST CSHS
            </Typography>
          </Box>

          {/* Web */}
          <Box
            className="sm:hidden md:flex flex-1"
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                href={page.href}
                onClick={handleCloseNavMenu}
                className="my-2 text-center"
                sx={{ color: "white", display: "block", textTransform: "none" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Mobile and web */}
          {/* TODO: opening the user settings hides the scrollbar */}
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className="p-0">
                <Avatar alt="User account" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              className="mt-[45px]"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <Typography
                    className="text-center"
                    component={Link}
                    href={setting.href}
                  >
                    {setting.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
