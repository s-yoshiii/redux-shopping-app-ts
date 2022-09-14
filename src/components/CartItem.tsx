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
type Props = CartItems;
export const CartItem: FC<Props> = (props) => {
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
              ￥{price.toLocaleString()}
            </Typography>
            <Stack>
              <IconButton aria-label="remove">
                <AddCircleRoundedIcon />
              </IconButton>
              <IconButton aria-label="remove">
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
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
