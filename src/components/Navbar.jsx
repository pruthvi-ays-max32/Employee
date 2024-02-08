// import React from 'react'
// import './navbar.css'

// const Navbar = (props) => {
  
  
//   return (
//     <div className='navbar'>
//       <h1>{props.obj.text} </h1>
//       <button id="1" className='addemp' type='button' onClick={props.displayCentre}>Add Emp</button>
//     </div>
//   )
// }

// export default Navbar





// Using Material UI

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar(props) {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            AYS SOFTWARE SOLUTIONS
          </Typography>
          <Button id="1" variant="text" color="inherit" onClick={props.displayCentre}>Add Employee</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}