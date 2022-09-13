import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../store";
import { CartItem } from "./CartItem";

const CartContainer = () => {
  const { amount, cartItems } = useAppSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <Container>
        <Box sx={{ my: 14 }}>
          <Typography variant="h2" gutterBottom>
            Cart
          </Typography>
          <Typography variant="h6" gutterBottom>
            何も入っていません。
          </Typography>
        </Box>
      </Container>
    );
  }
  return (
    <Container>
      <Box sx={{ my: 14 }}>
        <Typography variant="h2" gutterBottom>
          Cart
        </Typography>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} />;
          })}
        </div>
      </Box>
    </Container>
  );
};

export default CartContainer;
