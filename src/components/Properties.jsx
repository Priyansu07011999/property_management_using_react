import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, TextField, MenuItem } from '@mui/material';
import properties from '../utils/data';
import IndianStates from '../utils/data3';
import prop from '../assets/prop.avif';
import { useCart } from '../contexts/cartContext'; 

const Properties = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const { addToCart } = useCart();

  const handleFilter = (property) => {
    const isLocationMatch = location ? property.location.includes(location) : true;
    const isPriceMatch = priceRange ? checkPriceRange(property.amount, priceRange) : true;
    const isBedroomMatch = bedrooms ? property.bedrooms === Number(bedrooms) : true;
    return isLocationMatch && isPriceMatch && isBedroomMatch;
  };

  const checkPriceRange = (price, range) => {
    const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    if (range === 'low') return priceValue < 100000000;
    if (range === 'mid') return priceValue >= 100000000 && priceValue < 300000000; 
    if (range === 'high') return priceValue >= 300000000;
    return true;
  };

  const filteredProperties = properties.filter(handleFilter);

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <div style={{
          position: 'relative',
          textAlign: 'center',
          color: '#0B2F9F',
          marginBottom: '20px',
        }}
      >
        <div style={{
            backgroundImage: `url(${prop})`,
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <Typography variant="h4" sx={{
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
          <Typography variant="h4" sx={{
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

      {/* Filters Section */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ color: '#000', backgroundColor: '#fff' }}
          >
            <MenuItem value="">All Locations</MenuItem>
            {IndianStates.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Price Range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            sx={{ color: '#000', backgroundColor: '#fff' }}
          >
            <MenuItem value="">All Prices</MenuItem>
            <MenuItem value="low">Below ₹10 Cr</MenuItem>
            <MenuItem value="mid">₹10 Cr- ₹30 Cr</MenuItem>
            <MenuItem value="high">Above ₹30 Cr</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            sx={{ color: '#000', backgroundColor: '#fff' }}
          >
            <MenuItem value="">Any Bedrooms</MenuItem>
            <MenuItem value="1">1 Bedroom</MenuItem>
            <MenuItem value="2">2 Bedrooms</MenuItem>
            <MenuItem value="3">3 Bedrooms</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {/* Properties Grid */}
      <Grid container spacing={4}>
        {filteredProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <CardMedia
                component="img"
                sx={{ height: '350px', objectFit: 'cover' }}
                image={property.img}
                alt={property.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {property.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {property.description}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 'auto' }}>
                  ₹{Number(property.amount).toLocaleString()}
                </Typography>

              </CardContent>
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: '0 16px 16px' }}
                onClick={() => addToCart(property)} 
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
