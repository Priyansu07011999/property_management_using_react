import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import cartimg from '../assets/cart.jpeg'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => {
    const itemAmount = Number(item.amount) || 0;
    const itemQuantity = Number(item.quantity) || 0;
    return total + itemAmount * itemQuantity;
  }, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { totalAmount } });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#fff', backgroundColor: '#000', height: '100%' }}>
      
      
      {cart.length === 0 ? (
        <Typography variant="h6" style={{ fontStyle: 'italic', margin: '20px 0' }}>
          Your cart is empty. Feeling so light!
        </Typography>
      ) : (
        <>
        <div style={{
            backgroundImage: `url(${cartimg})`,
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
            Cart
          </Typography>
        </div>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item key={item.id} sm={12} md={4}>
                <Card style={{ display: 'flex', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    style={{ height: '220px', width: '300px', objectFit: 'cover' }}
                  />
                  <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ textAlign: 'left' }}>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography variant="body1">Amount: ₹{item.amount.toLocaleString()}</Typography>
                      <Typography variant="body2">Bedrooms:{item.bedrooms}</Typography>
                      <Typography variant="body2">Location:{item.location}</Typography>
                      <Typography variant="body2">Added on: {item.addedAt}</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px' }}>
                      <Button 
                        variant="outlined" 
                        onClick={() => updateQuantity(item.id, -1)} 
                        disabled={item.quantity <= 1} 
                        style={{ margin: '0 5px' }}
                      >
                        -
                      </Button>
                      <Typography variant="body2" style={{ margin: '0 10px' }}>
                        Quantity: {item.quantity}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        onClick={() => updateQuantity(item.id, 1)} 
                        style={{ margin: '0 5px' }}
                      >
                        +
                      </Button>
                    </div>
                    <div style={{ marginTop: '10px', marginBottom: '10px', marginRight: '45%' }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div style={{ marginTop: '90px' }}>
            <Typography variant="h6">
              Total Amount: ₹{totalAmount.toLocaleString()}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCheckout}  
              style={{ marginTop: '100px' }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
