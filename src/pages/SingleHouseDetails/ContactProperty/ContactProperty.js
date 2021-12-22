import React from "react";
import { TextField, Stack } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useSelector, useDispatch } from "react-redux";
// import { BiRightArrowAlt } from "react-icons/bi";
import "./ContactProperty.css";
import { useNavigate } from "react-router-dom";
import { DesktopDatePicker } from "@mui/lab";
const { arrivalDateAction, departureDateAction } =
    "../../../redux/action/searchAction.js";

const ContactProperty = ({ house }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses.searchHouse);
    const searchHouses = useSelector((state) => state.houses.searchHouse);
    const guest = searchHouses.adult + searchHouses.child + searchHouses.babies;
    const handleReviewHouseRules = () => {
        navigate("/reviewHouseRules", {
            state: { house: house, searchHouses: searchHouses },
        });
    };

    return (
        <div className='contact-room-container'>
            <h6>Contact Room</h6>
            <div className='contact-room-info'>
                <div>
                    <p>Dates</p>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack className='contact-date'>
                                <DesktopDatePicker
                                    className='departure'
                                    label='Arrival'
                                    inputFormat='MM/dd/yyyy'
                                    value={houses.arrivalDate}
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
                                    value={houses.departureDate}
                                    onChange={(newValue) =>
                                        dispatch(departureDateAction(newValue))
                                    }
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </div>
                </div>
                <div>
                    <p>Guests</p>
                    <div className='date-contact'>
                        <p>
                            {houses.adult + houses.child + houses.babies} Guests
                        </p>
                    </div>
                </div>
                <div className='data-price'>
                    <p>Price</p>
                    <p>$ {house.price}</p>
                </div>
                <div className='data-price'>
                    <p>CleanIng Fee</p>
                    <p>$ {house.cleaningFee}</p>
                </div>
                <div className='data-price'>
                    <p>Service Fee</p>
                    <p>$ {house.serviceFee}</p>
                </div>

                <div className='data-price total-price'>
                    <p>Total Price</p>
                    <p>
                        $ {house.price + house.cleaningFee + house.serviceFee}
                    </p>
                </div>
                <button
                    style={{
                        padding: "12px 18px",
                        marginTop: "20px",
                        border: "0",
                        borderRadius: "5px",
                        backgroundColor: "#3270FC",
                        color: "#fff",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    onClick={handleReviewHouseRules}
                    disabled={guest === 0 ? true : false}
                    className={
                        guest === 0 ? "reserve-disable" : "reserve-enable"
                    }
                >
                    Reserve
                </button>
            </div>
        </div>
    );
};

export default ContactProperty;
