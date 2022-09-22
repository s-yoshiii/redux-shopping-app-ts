import React, { FC } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  Button,
  CardMedia,
  Stack,
  Rating,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { grey } from "@mui/material/colors";
import { CartItems } from "../types/cartItem";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/CartSlice";
type Props = CartItems;
export const CartItem: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { id, img, title, price, amount, rate } = props;
  return (
    <Card elevation={2} sx={{ display: { md: "flex" } }}>
      <CardMedia
        component="img"
        sx={{ width: { md: 400 }, height: { md: 220, xs: 280 } }}
        image={img}
        alt=""
      />
      <CardContent
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          width: { md: "calc(100% - 400px)" },
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            component="div"
            variant="h5"
            sx={{ wordBreak: "break-all" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="error.light"
            sx={{ fontWeight: "medium", textAlign: "right", ml: 2 }}
            component="div"
          >
            ￥{price.toLocaleString()}
          </Typography>
        </Stack>
        <Rating name="read-only" value={rate} readOnly sx={{ mt: 2 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ mt: 6 }}
        >
          <Box>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => dispatch(removeItem(id))}
            >
              Delete
            </Button>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
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
              <RemoveCircleOutlineIcon />
            </IconButton>
            <Typography
              variant="h5"
              color="primary.dark"
              sx={{ fontWeight: "medium", textAlign: "right" }}
              component="div"
            >
              {amount}
            </Typography>
            <IconButton
              aria-label="add"
              onClick={() => {
                dispatch(increase(id));
              }}
            >
              <ControlPointIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
