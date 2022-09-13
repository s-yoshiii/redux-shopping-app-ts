import React from "react";
import { Snackbar, Alert, Stack } from "@mui/material";
export const CartItem = () => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open>
        <Alert severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
};
