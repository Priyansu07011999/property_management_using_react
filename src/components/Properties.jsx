import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import properties from '../utils/data';
import prop from '../assets/prop.avif';

const Properties = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
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
            backgroundImage: `url(${prop})`,
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
              top: '25%',
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '32px', sm: '36px', md: '48px' },
            }}
          >
            Our Exclusively
          </Typography>

          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              bottom: '30%',
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '40px', sm: '48px', md: '64px' },
            }}
          >
            Available Properties
          </Typography>
        </div>
      </div>

      <Grid container spacing={4}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: 3,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: '350px',
                  objectFit: 'cover',
                }}
                image={property.img}
                alt={property.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {property.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {property.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                  {property.bedrooms} Bedrooms
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {property.location}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 'auto' }}>
                  {property.amount}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: '0 16px 16px' }}
              >
                Book Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Properties;
