import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    fetchFailed,
    loadingRequest,
    fetchSuccess,
} from "../../../redux/action/houseAction";
import House from "../House/House";
import "./Offers.css";

const Offers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses.houses);

    useEffect(() => {
        dispatch(loadingRequest());
        fetch("https://ants-nest.herokuapp.com/add-listing")
            .then((res) => res.json())
            .then((data) => dispatch(fetchSuccess(data)))
            .catch((error) => dispatch(fetchFailed(error.message)));
    }, [dispatch]);

    const handleViewAllProduct = () => {
        navigate("/listings");
    };

    return (
        <div className='offers-container'>
            <Box className='offer-cont'>
                <div className='hot-off'>
                    <p className='browser-offer'>BROWSE HOT OFFERS</p>
                    <Typography className='latest-property-text'>
                        Latest Properties
                    </Typography>
                </div>
                <Box className='card-container'>
                    {houses.length === 0 ? (
                        <CircularProgress className='progress' />
                    ) : (
                        houses.map((house) => (
                            <House key={house._id} house={house} />
                        ))
                    )}
                </Box>
                <Button
                    className='view-all-properties'
                    variant='contained'
                    size='small'
                    onClick={handleViewAllProduct}
                >
                    View All Properties
                </Button>
            </Box>
        </div>
    );
};

export default Offers;
