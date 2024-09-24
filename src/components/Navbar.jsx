import React, { useState } from 'react';
import { Stack, Typography, Tooltip, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import homeLogo from '../assets/home_logo.png';
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
        zIndex: 1000,
      }}
    >
      <Tooltip title="Your imagination is our responsibility" arrow>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={homeLogo} alt="Home Logo" style={{ width: '50px', marginRight: '10px' }} />
          <Stack direction="column" alignItems="center" sx={{ lineHeight: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: '#fff', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, fontWeight: 'bold', margin: 0, lineHeight: 1 }}
            >
              Your
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#fff', fontSize: { xs: '0.8rem', sm: '1rem' }, margin: 0, lineHeight: 1 }}
            >
              Home
            </Typography>
          </Stack>
        </Link>
      </Tooltip>

      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Link
          to="/"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}
        >
          Home
        </Link>
        <Link
          to="/properties"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}
        >
          Properties
        </Link>
        <Link
          to="/team"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}
        >
          Team
        </Link>
        <Link
          to="/contact"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}
        >
          Contact
        </Link>
      </Stack>

      <IconButton
        sx={{ color: '#fff', display: { xs: 'flex', md: 'none' } }}
        onClick={toggleDrawer(true)}
      >
        <RxDropdownMenu size={30} />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItem
            button
            component={Link}
            to="/"
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/properties"
          >
            <ListItemText primary="Properties" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/team"
          >
            <ListItemText primary="Team" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
