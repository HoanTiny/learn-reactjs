import { AccountCircle, Close } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import DoneIcon from "@mui/icons-material/Done";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";
import { cartItemsCountSelector } from "../../features/Cart/selectors";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.scss";
import { hideMiniCart } from "../../features/Cart/cartSlice";
const pages = ["todos", "albums", "products"];

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.LOGIN);
  const [anchorEl, setAnchorElMenu] = React.useState(null);
  const state = useSelector((state) => state.cart.showMiniCart);
  console.log(`state`, state);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleCloseMiniart = () => {
    const closeMinicart = hideMiniCart();
    dispatch(closeMinicart);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoDevIcon />
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" className="navlink">
                Home
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                id="menu-appbar"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink to={`/${page}`} className="navlink" key={page}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleCartClick}
            >
              <Badge
                badgeContent={cartItemsCount}
                color="error"
                sx={{ position: "relative" }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {state && (
              <>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  component="div"
                  sx={{
                    position: "absolute",
                    background: "rgb(255, 255, 255)",
                    color: "#000",
                    top: "50px",
                    right: "52px",
                    padding: "12px",
                    fontSize: "0.8rem",
                    width: "240px",
                    borderRadius: "6px",
                    boxShadow: "rgb(179, 179, 179) 1px 1px 15px",
                  }}
                >
                  <CloseIcon
                    sx={{
                      position: "absolute",
                      top: 2,
                      right: 3,
                      color: "rgb(155, 155, 155)",
                      fontSize: "18px",
                      padding: "4px",
                      cursor: "pointer",
                    }}
                    onClick={handleCloseMiniart}
                  />
                  <Grid
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    <DoneIcon
                      sx={{
                        color: "#15ff00",
                        fontSize: "1rem",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    />
                    Product added to cart
                  </Grid>

                  <Grid>
                    <Box
                      sx={{
                        padding: "10px 4px",
                        marginTop: "16px",
                        backgroundColor: "rgb(255, 57, 69)",
                        color: "rgb(255, 255, 255)",
                        borderRadius: "6px",
                        // width: "100%",
                        fontSize: "14px",
                        fontWeight: "400",
                        cursor: "pointer",
                      }}
                      onClick={handleCartClick}
                    >
                      Xem giỏ hàng và thanh toán
                    </Box>
                  </Grid>
                </Grid>
              </>
            )}
            {!isLoggedIn && (
              <Box sx={{ flexGrow: 0 }}>
                <Button color="inherit" onClick={handleClickOpen}>
                  Login
                </Button>
              </Box>
            )}
            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleClickMenu}>
                <AccountCircle />
              </IconButton>
            )}

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog open={open} disableEscapeKeyDown>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button
                  onClick={() => setMode(MODE.LOGIN)}
                  sx={{ mt: 2 }}
                  color="primary"
                >
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button
                  onClick={() => setMode(MODE.REGISTER)}
                  sx={{ mt: 2 }}
                  color="primary"
                >
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Header;
