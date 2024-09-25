import React from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import contact from '../assets/contactt.jpeg';

const Contact = () => {
  return (
    <Box 
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#000' }}
    >
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          color: '#0B2F9F',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${contact})`,
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              top: '30%',
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '48px',
            }}
          >
            Contact me
          </Typography>
        </div>
      </div>

      <Box 
        sx={{ textAlign: 'center', color: '#fff', padding: '20px', fontSize: '24px'}} 
      >
        <Typography variant="h4">
          Office Address: Athgarh, Cuttack, Odisha, India
        </Typography>
        <Typography variant="h5" sx={{ marginTop: '10px' }}>
          Telephone: +91 12345 67890
        </Typography>
        <Typography variant="h5" sx={{ marginTop: '10px' }}>
          Fax: +91 12345 67891
        </Typography>
      </Box>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        sx={{ padding: '20px', backgroundColor: '#000', marginTop: 'auto' }}
      >
        <IconButton onClick={() => window.open('https://github.com/yourusername', '_blank')}>
          <GitHubIcon sx={{ color: '#fff', fontSize: '48px' }} /> 
        </IconButton>
        <IconButton onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}>
          <LinkedInIcon sx={{ color: '#fff', fontSize: '48px' }} /> 
        </IconButton>
        <IconButton onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}>
          <WhatsAppIcon sx={{ color: '#fff', fontSize: '48px' }} /> 
        </IconButton>
        <IconButton onClick={() => window.open('https://facebook.com/yourusername', '_blank')}>
          <FacebookIcon sx={{ color: '#fff', fontSize: '48px' }} /> 
        </IconButton>
        <IconButton onClick={() => window.open('https://instagram.com/yourusername', '_blank')}>
          <InstagramIcon sx={{ color: '#fff', fontSize: '48px' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Contact;
