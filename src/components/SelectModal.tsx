import React from "react";
import { Modal, Box, Typography, Stack, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/ModalSlice";
import { clearCart } from "../features/cart/CartSlice";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
export const SelectModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal open aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          買い物かごを空にしますか？
        </Typography>
        <Stack
          spacing={2}
          sx={{ mt: 3 }}
          direction="row"
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            YES
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            NO
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
