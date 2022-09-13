import { Box, Container, Typography, Stack } from "@mui/material";
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
        <Stack spacing={4}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} />;
          })}
        </Stack>
      </Box>
    </Container>
  );
};

export default CartContainer;
