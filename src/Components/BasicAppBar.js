import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Page2 from '../Pages/Page2'
import Logo from '../LSA_logo.png'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <img src={Logo} alt="Logo Image" height={200} width={400} left/>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Local Softball Association
          </Typography>
          <Button color="inherit" href="/page2">Tournaments</Button>
          <Button color="inherit" href="/page2">About</Button>
          <Button color="inherit" href="/page2">Page 2</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}