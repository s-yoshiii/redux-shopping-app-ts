import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useAppSelector } from "../store";
import { CartItem } from "./CartItem";

const CartContainer = () => {
  const { amount, cartItems, total } = useAppSelector((store) => store.cart);
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
            return <CartItem key={item.id} {...item} />;
          })}
        </Stack>
        <Divider sx={{ my: 7 }} />
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h3">合計:{total}円</Typography>
        </Box>
        <Box mt={4} sx={{ textAlign: "center" }}>
          <Button variant="outlined" size="large" startIcon={<DeleteIcon />}>
            全削除
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CartContainer;
