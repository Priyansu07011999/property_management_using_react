import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import properties from '../utils/data';

const Properties = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
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
            backgroundImage: 'url("https://static.wixstatic.com/media/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg/v1/fill/w_1899,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg")',
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
              color: '#0B2F9F',
              fontWeight: 'bold',
              fontSize: '48px',
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
              color: '#0B2F9F',
              fontWeight: 'bold',
              fontSize: '64px',
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
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: '350px', 
                  objectFit: 'cover'
                }}
                image={property.img}
                alt={property.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {property.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  sx={{
                    maxHeight: '50px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {property.description}
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
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
