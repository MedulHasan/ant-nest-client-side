/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { Typography, TextField, Stack, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import banner from "../../../image/vedio/banner.mp4";
import banner1 from "../../../image/banner.jpg";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import {
    countAdultMinus,
    countAdultPlus,
    countChildMinus,
    countChildPlus,
    countBabiesMinus,
    countBabiesPlus,
    addressAction,
    arrivalDateAction,
    departureDateAction,
} from "../../../redux/action/searchAction";
// import { useNavigate } from "react-router-dom";
import { infoAlert } from "../../../redux/action/alertAction";

const Banner = ({ navigate }) => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchHouse = useSelector((state) => state.houses.searchHouse);
    const guest = searchHouse.adult + searchHouse.child + searchHouse.babies;
    const date = searchHouse.arrivalDate && searchHouse.departureDate;

    const handleSearch = () => {
        if (searchHouse.address && date && guest) {
            navigate("/listings");
        } else {
            dispatch(infoAlert(true));
        }
    };

    return (
        <div data-testid='search' className='banner'>
            <video autoPlay muted loop id='myVideo'>
                <source src={banner} type='video/mp4' />
            </video>
            {/* <img id='myVideo' src={banner1} alt='' /> */}
            <div className='banner-container'>
                <p className='company-type'>Real Estate Searching Platform</p>
                <Typography variant='h3' className='banner-title'>
                    Find The House of Your Dream Using Our Platform
                </Typography>
            </div>
            <div className='search-container'>
                <p>Use Quick Search</p>
                <form>
                    <TextField
                        onBlur={(e) => dispatch(addressAction(e.target.value))}
                        style={{ width: "100%" }}
                        id='outlined-basic'
                        label='City, Landmark or Address'
                        variant='outlined'
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack className='date-search'>
                            <DesktopDatePicker
                                className='departure'
                                label='Arrival'
                                inputFormat='MM/dd/yyyy'
                                value={searchHouse.arrivalDate}
                                onChange={(newValue) =>
                                    dispatch(arrivalDateAction(newValue))
                                }
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                            <DesktopDatePicker
                                label='Departure'
                                inputFormat='MM/dd/yyyy'
                                value={searchHouse.departureDate}
                                onChange={(newValue) =>
                                    dispatch(departureDateAction(newValue))
                                }
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <div className='guest-count'>
                        <div className='adult-search'>
                            <p>Adults</p>
                            <div className='inc-drc'>
                                <BiMinus
                                    className='inc-dec-icon'
                                    onClick={() =>
                                        dispatch(
                                            countAdultMinus(searchHouse.adult)
                                        )
                                    }
                                />
                                <span>{searchHouse.adult}</span>
                                <BsPlusLg
                                    className='inc-dec-icon'
                                    onClick={() =>
                                        dispatch(
                                            countAdultPlus(searchHouse.adult)
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className='adult-search'>
                            <p>Child</p>
                            <div className='inc-drc'>
                                <BiMinus
                                    className='inc-dec-icon'
                                    onClick={() =>
                                        dispatch(
                                            countChildMinus(searchHouse.child)
                                        )
                                    }
                                />
                                <span>{searchHouse.child}</span>
                                <BsPlusLg
                                    className='inc-dec-icon'
                                    onClick={() =>
                                        dispatch(
                                            countChildPlus(searchHouse.child)
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className='adult-search'>
                            <p>Babies</p>
                            <div className='inc-drc'>
                                <BiMinus
                                    className='inc-dec-icon'
                                    onClick={() =>
                                        dispatch(
                                            countBabiesMinus(searchHouse.babies)
                                        )
                                    }
                                />
                                <span>{searchHouse.babies}</span>
                                <BsPlusLg
                                    className='inc-dec-icon'
                                    onClick={() =>
                                        dispatch(
                                            countBabiesPlus(searchHouse.babies)
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={handleSearch}
                        className='search-btn'
                        variant='contained'
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Banner;
