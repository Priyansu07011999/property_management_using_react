import React from 'react';
import { Typography, Grid, Card, CardMedia, Button, CardContent } from '@mui/material';
import team from '../assets/teamm.jpg';
import teams from '../utils/data2'; 

const Team = () => {
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
            backgroundImage: `url(${team})`,
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
            Our Excellent
          </Typography>

          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              bottom: '25%',
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '64px',
            }}
          >
            Team Members
          </Typography>
        </div>
      </div>

      <Grid container spacing={4}>
        {teams.map((member) => (
          <Grid item xs={12} md={6} key={member.id}> 
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width:'50%',
                border: '1px solid #ccc',
                borderRadius: '20px',
                boxShadow: 3,
                overflow: 'hidden',
                backgroundColor: '#000', 
                color: '#fff',
                alignItems: 'center', 
                margin:'auto'
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: '500px', 
                  objectFit: 'cover',
                  borderBottom: '1px solid #ccc',
                  borderRadius: '20px 20px 0 0' 
                }}
                image={member.img}
                alt={member.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  padding: '16px',
                  alignItems:'center'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {member.title}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    maxHeight: '50px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '24px',
                    color: '#fff'
                  }}
                >
                  {member.name}
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 2, color: '#fff' }}>
                  {member.email}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: '0 16px 16px' }}
                onClick={() => window.open(member.Url, "_blank")} 
              >
                LinkedIn
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Team;
