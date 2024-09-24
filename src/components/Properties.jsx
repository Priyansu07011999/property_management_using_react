import React, { useState } from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import properties from '../utils/data'; 

const Properties = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
      
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          textAlign: 'center',
          backgroundImage: 'url("https://static.wixstatic.com/media/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg/v1/fill/w_1899,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg")',
          height: '300px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#0B2F9F',
          fontWeight: 'bold',
          fontSize: '32px',  
        }}
      >
        Available Properties
      </Typography>


      <Grid container spacing={4}>
        {properties.map(property => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card sx={{ border: '1px solid #ccc', borderRadius: '8px', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={property.img}
                alt={property.title}
                sx={{ objectFit: 'cover' }} 
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {property.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {property.description}
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  {property.amount}
                </Typography>
                <Button variant="contained" color="primary">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Properties;