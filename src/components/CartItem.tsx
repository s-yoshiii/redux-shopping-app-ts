import React, { FC } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { CartItems } from "../types/cartItem";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/CartSlice";
type Props = CartItems;
export const CartItem: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { id, img, title, price, amount } = props;
  return (
    <Card elevation={2} sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: 200 }} image={img} alt="" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "calc(100% - 200px)",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            component="div"
            variant="h5"
            sx={{ wordBreak: "break-all" }}
          >
            {title}
          </Typography>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Typography
              variant="h5"
              color="primary.dark"
              sx={{ fontWeight: "medium", textAlign: "right" }}
              component="div"
            >
              {amount}
              <br />￥{price.toLocaleString()}
            </Typography>
            <Stack>
              <IconButton
                aria-label="add"
                onClick={() => {
                  dispatch(increase(id));
                }}
              >
                <AddCircleRoundedIcon />
              </IconButton>
              <IconButton
                aria-label="remove"
                onClick={() => {
                  if (amount === 1) {
                    dispatch(removeItem(id));
                    return;
                  }
                  dispatch(decrease(id));
                }}
              >
                <RemoveCircleRoundedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 3,
            pb: 1,
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(removeItem(id))}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
