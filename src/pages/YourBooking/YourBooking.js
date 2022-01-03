import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Booking from "./Booking/Booking";
import "./YourBooking.css";

const YourBooking = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8888/booking/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, [user.email]);
    return (
        <div className='your-booking-container'>
            <div className='add-listing-user'>
                <h3>My Booking</h3>
                <div className='add-listing-user-info'>
                    <img src={user.photoURL} alt='' />
                    <p>
                        Welcome,{" "}
                        <span style={{ color: "#3270FC" }}>
                            {user.displayName}
                        </span>
                    </p>
                </div>
            </div>
            <Box className='booking-paper-container'>
                {myBooking.length === 0 ? (
                    <>
                        {/* <CircularProgress className='progress' /> */}
                        <p>You Have No Booking Right Now</p>
                    </>
                ) : (
                    myBooking.map((booking) => (
                        <Booking key={booking._id} booking={booking} />
                    ))
                )}
            </Box>
        </div>
    );
};

export default YourBooking;
