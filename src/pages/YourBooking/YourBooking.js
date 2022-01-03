import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./YourBooking.css";

const YourBooking = () => {
    const { user } = useAuth();

    useEffect(() => {}, []);
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
        </div>
    );
};

export default YourBooking;
