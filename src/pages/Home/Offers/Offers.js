import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    fetchFailed,
    fetchRequest,
    fetchSuccess,
} from "../../../redux/action/houseAction";
import House from "../House/House";
import "./Offers.css";

const Offers = () => {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses.houses);

    useEffect(() => {
        dispatch(fetchRequest());
        fetch("./fakeData.json")
            .then((res) => res.json())
            .then((data) => dispatch(fetchSuccess(data)))
            .catch((error) => dispatch(fetchFailed(error.message)));
    }, [dispatch]);

    return (
        <div className='offers-container'>
            <Box>
                <p className='browser-offer'>BROWSE HOT OFFERS</p>
                <Typography className='latest-property-text'>
                    Latest Properties
                </Typography>
                <Box className='card-container'>
                    {houses.map((house) => (
                        <House key={house.id} house={house} />
                    ))}
                </Box>
                <Button
                    className='view-all-properties'
                    variant='contained'
                    size='small'
                >
                    View All Properties
                </Button>
            </Box>
        </div>
    );
};

export default Offers;
