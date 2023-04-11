import { Alert, Button, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAppAlert } from "../../store/app-alert/app-alert-slice";

const AppAlert = (props) => {
  const { openAlert, message } = useSelector((state) => state.snackbar);
  console.log(openAlert,message);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal } = state;

  const handleClose = () => {
    dispatch(closeAppAlert());
  };
  return (
    <div>


      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        message={'working'}
        severity="success"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>

    </div>
  );
};

export default AppAlert;
