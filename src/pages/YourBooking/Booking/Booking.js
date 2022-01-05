import { Box, Paper } from "@mui/material";
import React from "react";
import "./Booking.css";

const Booking = ({ booking }) => {
    const {
        img1,
        houseTitle,
        address,
        city,
        name,
        phone,
        arrivalDate,
        departureDate,
        adult,
        child,
        babies,
        prices,
    } = booking;
    return (
        <Box>
            <Paper className='single-booking' variant='outlined'>
                <div className='booking-paper-header'>
                    <img
                        width={70}
                        height={50}
                        style={{ borderRadius: "5px" }}
                        src={img1}
                        alt=''
                    />
                    <div>
                        <p>
                            For <span>{houseTitle}</span>{" "}
                        </p>
                        <p>
                            {address}, {city}
                        </p>
                    </div>
                </div>
                <div className='booking-other-info'>
                    <p>Owner Name: {name}</p>
                    <p>Owner Phone: {phone}</p>
                    <p>Arrival Date: {arrivalDate.slice(0, 10)}</p>
                    <p>Departure Date: {departureDate.slice(0, 10)}</p>
                    <p>Adult: {adult}</p>
                    <p>Child: {child}</p>
                    <p>Babies: {babies}</p>
                    <p>Price: ${prices}</p>
                </div>
            </Paper>
        </Box>
    );
};

export default Booking;
