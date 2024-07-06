import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const Add = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'darkseagreen', // To center vertically
      }}
    >
    <Box 
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:'pink',
        '& .MuiTextField-root': { m: 2, width: '35ch' },
        
        
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField 
        id="outlined-required"
        label="Product name"
        variant="outlined"
      />
      <TextField
        id="outlined-disabled"
        label="Description"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Price"
        variant="outlined"
      />
      <TextField
        id="outlined-read-only-input"
        label="Category"
        variant="outlined"
      />
      <Button variant='contained' sx={{ m: 2 }}>Register</Button> 
    </Box>
    </Box>
  );
}

export default Add;