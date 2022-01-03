import { Box, Paper } from "@mui/material";
import React from "react";
import "./Booking.css";

const Booking = ({ booking }) => {
    return (
        <Box>
            <Paper className='single-booking' variant='outlined'>
                <div className='booking-paper-header'>
                    <img
                        width={70}
                        height={50}
                        style={{ borderRadius: "5px" }}
                        src={booking.img1}
                        alt=''
                    />
                    <p>
                        For <span>{booking.houseTitle}</span>{" "}
                    </p>
                </div>
            </Paper>
        </Box>
    );
};

export default Booking;
