/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { infoAlert } from "../../../redux/action/alertAction";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function CustomAlert() {
    const dispatch = useDispatch();
    const alertMsg = useSelector((state) => state.alertMsg);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        dispatch(infoAlert(false));
    };

    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
                open={alertMsg.alertOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={
                        alertMsg.successAlert
                            ? "success"
                            : alertMsg.errorAlert
                            ? "error"
                            : "info"
                    }
                    sx={{ width: "100%" }}
                >
                    {alertMsg.successAlert
                        ? "successfully done"
                        : alertMsg.errorAlert
                        ? "error occurred"
                        : "information missing"}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default CustomAlert;
