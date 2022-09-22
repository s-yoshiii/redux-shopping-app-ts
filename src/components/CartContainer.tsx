import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../store";
import { CartItem } from "./CartItem";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/ModalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useAppSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <Container>
        <Box sx={{ my: 14 }}>
          <Typography variant="h2" gutterBottom>
            Cart
          </Typography>
          <Typography variant="h6" gutterBottom>
            Nothing in cart.
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
          <Typography variant="h3">Total:￥{total.toLocaleString()}</Typography>
        </Box>
        <Box mt={4} sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<DeleteIcon />}
            onClick={() => dispatch(openModal())}
          >
            All Delete
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CartContainer;
