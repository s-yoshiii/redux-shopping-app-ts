import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
export const CartItem = () => {
  return (
    <Card elevation={2} sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://placehold.jp/600x400.png"
        alt=""
      />
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
            TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
          </Typography>
          <Typography
            variant="h5"
            color="primary.dark"
            sx={{ fontWeight: "medium", textAlign: "right" }}
            component="div"
          >
            ￥10,000
          </Typography>
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
          <IconButton aria-label="previous">
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
