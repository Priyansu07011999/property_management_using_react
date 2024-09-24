import React from 'react';
import houseImage from '../assets/house.jpg'; 
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden',
        height: 'calc(100vh - 64px)', 
        backgroundImage: `url(${houseImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '90%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: '0', 
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          }}
        >
          New Properties
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
            lineHeight: 1.5,
            marginBottom: '30px', 
          }}
        >
         Exclusively by Your Home
        </Typography>
        
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D91656',
            color: 'white',
            padding: '10px 20px',
            fontSize: { xs: '1rem', sm: '1.2rem' },
            '&:hover': {
              backgroundColor: '#EE66A6', 
            },
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
