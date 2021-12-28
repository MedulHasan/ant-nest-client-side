// import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import House from "../Home/House/House";
import "./YourListing.css";

const YourListing = () => {
    const { user } = useAuth();
    // const houses = useSelector((state) => state.houses.houses);
    const [myListing, setMyListing] = useState([]);

    useEffect(() => {
        fetch(`https://ants-nest.herokuapp.com/my-listing/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyListing(data));
    }, [user.email]);

    return (
        <div className='your-listing-container'>
            <div className='add-listing-user'>
                <h3>My Listing</h3>
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
            <Box className='card-container'>
                {myListing.length === 0 ? (
                    <>
                        {/* <CircularProgress className='progress' /> */}
                        <p>You Have No Listing Right Now</p>
                    </>
                ) : (
                    myListing.map((house) => (
                        <House key={house._id} house={house} />
                    ))
                )}
            </Box>
        </div>
    );
};

export default YourListing;
