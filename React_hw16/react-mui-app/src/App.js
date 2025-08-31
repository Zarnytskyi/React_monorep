import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My MUI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в приложение на Material UI!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Открыть диалог
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Привет!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это диалоговое окно в вашем React приложении с использованием Material UI.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
